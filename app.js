const express = require('express')
const app = express();
const port = 3003
const app = require("./server")

const server = app.listen(port, () => console.log("Server listening on p:3003"))
