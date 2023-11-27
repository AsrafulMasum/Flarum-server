require("dotenv").config();
const express = require("express");
const { middlewares } = require("./src/middlewares/defaultMiddlewares");
const connectDB = require("./src/db/connectDB");

const app = express();

const port = process.env.PORT || 3000;

const tokenApi = require("./src/routes/auth/auth");
const userApi = require("./src/routes/user/user");
const tagsApi = require("./src/routes/tags/tags");
const paymentApi = require("./src/routes/payment/payment")

middlewares(app);

app.use(tokenApi);
app.use(userApi);
app.use(tagsApi);
app.use(paymentApi)

app.get("/health", (req, res) => {
  res.send("server is running data will be appear soon...");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The requested url is invalid [${req.url}].`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });
};

main();
