const express = require('express')
const app = express();
const port = 3003
const middleware = require('./middleware')

app.set("view engine", "pug") // tell server which template engine to use
app.set("views", "views") // tell server where to look to find view files, when you need a view go to views folder

// Routes
const loginRoute = require('./routes/loginRoutes')
app.use("/login", loginRoute)

app.get("/", middleware.requireLogin, (req, res, next) => { // open / page=>middleware condition=>load page if true
  // request variable incoming, response variable sending back to user and next which handles middleware
  let payload = { // payload refers to data we're sending to a function or page
    pageTitle: "Home"
  }
  res.status(200).render("home", payload) // payload is data to send to home page
})

module.exports = app
