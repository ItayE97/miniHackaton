const express = require("express");
const app = express();
const PORT = 5001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT} on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Main page");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api", (req, res) => {
  res.json({ message: "Post request!" });
});

// const apiRouter = require('./routes/api');
// app.use('/api', apiRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
