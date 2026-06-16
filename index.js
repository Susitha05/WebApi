const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("https://web-api-kappa-silk.vercel.app/", (req, res) => {
  res.json({ message: "Hello Worldjjj" });
});

module.exports = app;