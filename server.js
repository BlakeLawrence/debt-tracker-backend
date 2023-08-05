import express from "express";
const app = express();
const port = process.env.PORT || 5000;

console.log(process.env);
app.get("/", (req, res) => {
  res.send("Hello from the other side");
});

app.listen(port, () => console.log(`App listening on port ${port}`));
