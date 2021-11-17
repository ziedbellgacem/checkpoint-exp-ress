const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/index1", (req, res) => {
  res.render("index1", { msg: "Login" });
});
app.get("/style1.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/style1.css"));
});
const logger = (req, res, next) => {
  const today = new Date();
  if (
    today.getDay() === 0 ||
    today.getDay() === 6 ||
    today.getHours() < 9 ||
    today.getHours() > 17
  ) {
    return res.sendFile(path.join(__dirname, "Public/404/index.html"));
  }
  next();
};

app.get("/style2.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/Public/404/style2.css"));
});
app.use(logger);
app.use(express.static("Public"));

const port = 5000;

app.listen(port, () => {
  console.log(`serveur running on port ${port}`);
});
