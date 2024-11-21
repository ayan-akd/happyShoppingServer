const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// routes
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const othersRoutes = require("./routes/filteredData");
const reviewsRoutes = require("./routes/reviews");

applyMiddleware(app);

app.use(usersRoutes);
app.use(productsRoutes);
app.use(othersRoutes);
app.use(reviewsRoutes);

app.get("/", (req, res) => {
  res.send("Service Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
