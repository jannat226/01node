import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "first joke" },
    { id: 2, title: "second joke" },
    { id: 3, title: "third joke" },
  ];
  res.json(jokes); // Use res.json() instead of res.send()
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
