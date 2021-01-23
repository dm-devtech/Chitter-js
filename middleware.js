exports.requireLogin = (req, res, next) => {
  if (req.session && req.session.user) { // if the session property is set and also user property (i.e. they are logged in) is set
    return next(); // passses it on to the next step in the request/response cycle
  }
  else {
    return res.redirect('/login')
  }
}
