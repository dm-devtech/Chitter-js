const express = require('express')
const app = express();
const router = express.Router();

app.set("view engine", "pug") // tell server which template engine to use
app.set("views", "views") // tell server where to look to find view files, when you need a view go to views folder

router.get("/", (req, res, next) => { // open / page=>middleware condition=>load page if true
  // request variable incoming, response variable sending back to user and next which handles middleware
  res.status(200).render("login") // payload is data to send to home page
})

module.exports = router;
