const displayContent = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url == "/profile") {
    res.setHeader('Content-Type', 'text/html')
    res.write('this is the profile page')
    return res.end();
  } else if(url == "/") {
    res.setHeader('Content-Type', 'text/html')
    res.write('this is the main page')
    return res.end();
  } else if(url == "/settings") {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>this is the settings page</h1><form action="/settings" method="POST"><input type="text"><button type="submit">Submit</button>')
    return res.end();
  }
    res.setHeader('Content-Type', 'text/html')
    res.write('page not found')
    res.end();
}

module.exports = displayContent
