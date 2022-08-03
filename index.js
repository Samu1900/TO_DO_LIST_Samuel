const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.render("Hello Word");
});

app.listen(3000, () => {
  console.log("Servidor Conectado!");
});
