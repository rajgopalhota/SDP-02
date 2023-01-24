import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("connected");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening the port http://localhost/" + port);
});