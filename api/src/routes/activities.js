const express = require("express");
const server = express();
server.use(express.json());
const { Activity, Country } = require("../db");

server.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  const activity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  let ctry;
  if (Array.isArray(countries)) {
    ctry = await Promise.all(
      countries.map((country) => Country.findByPk(country))
    );
  }
  if (ctry) {
    await activity.setCountries(ctry);
  }
  return res.send(activity);
});

module.exports = server;
