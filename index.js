require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(`Example app listening on port ${port}`);
  res.send(`<h1>${process.env}</h1>}`);
});

app.get("/twitter", (req, res) => {
  res.send("hey twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1> Please login </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>opening youtube</h1> ");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
