const express = require("express");
const server = express();
const { Country, Activity, conn } = require("../db");
server.use(express.json());

server.get("/:id", (req, res) => {
  return res.sendStatus(200);
});

server.get("/", async (req, res) => {
  const countries = await Country.findAll();
  res.send(countries);
});

module.exports = server;
