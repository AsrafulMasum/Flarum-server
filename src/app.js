require("dotenv").config();
const express = require("express");
const { middlewares } = require("./middlewares/defaultMiddlewares");
const connectDB = require("./db/connectDB");

const app = express();

const port = process.env.PORT || 5000;

const tokenApi = require("./routes/auth/auth")

middlewares(app);

app.use(tokenApi)

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