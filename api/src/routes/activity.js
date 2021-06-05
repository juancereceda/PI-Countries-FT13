var express = require("express");
var server = express();
server.use(express.json());

server.post("/", (req, res) => {
  return res.sendStatus(200);
});

module.exports = server;
