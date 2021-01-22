const express = require('express')
const app = express();
const port = 3003

app.get("/", (req, res, next) => {
  // request variable incoming, response variable sending back to user and next which handles middleware
  app.set("view engine", "pug") // tell server which template engine to use
  app.set("views", "views") // tell server where to look to find view files, when you need a view go to views folder
  res.status(200).send("confirmed") // when access code this will run
})

module.exports = app
