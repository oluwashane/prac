const app = require("express")();

app.get("/test", (req, res) => {
  res.status(200).send("Hello World")
})

app.get("/", (req, res) => {
  res.status(401).send("Authorized")
})

module.exports = app;
