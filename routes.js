const displayContent = (req, res) => {
  const url = req.url;
  if(url == "/profile") {
    res.setHeader('Content-Type', 'text/html')
    res.write('this is the profile page')
    return res.end();
  } else if(url == "/") {
    res.setHeader('Content-Type', 'text/html')
    res.write('this is the main page')
    return res.end();
  }
    res.setHeader('Content-Type', 'text/html')
    res.write('page not found')
    res.end();
}

module.exports = displayContent