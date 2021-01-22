const express = require('express')
const app = express();
const port = 3003

app.get("/", (req, res, next) => {
  // request variable incoming, response variable sending back to user and next which handles middleware
  res.status(200).send("confirmed") // when access code this will run
})

module.exports = app
