const express = require("express");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb:localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortUrls", (req, res) => {
  console.log(req.body);
});

app.listen(process.env.PORT || 5000, () => {
  const port = process.env.PORT || 5000;
  console.log(`Server is running on port http://localhost:${port}`);
});
