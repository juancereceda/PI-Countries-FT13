const express = require("express");
const server = express();
server.use(express.json());
const { Activity, Country } = require("../db");

server.get("/", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    return res.json(activities);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

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
