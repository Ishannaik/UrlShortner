const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 5000, () => {
  const port = process.env.PORT || 5000;
  console.log(`Server is running on port http://localhost:${port}`);
});
