const express = require("express");
const server = express();
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
server.use(express.json());

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foundById = await Country.findOne({
      include: Activity,
      where: {
        id: {
          [Op.eq]: id.toUpperCase(),
        },
      },
    });
    res.send(foundById);
  } catch (error) {
    res.status(400).send(error);
  }
});

server.get("/", async (req, res) => {
  const { name, continent } = req.query;
  try {
    if (name || continent) {
      const filter = { where: {} };
      name
        ? (filter.where.name = { [Op.substring]: name.toLowerCase() })
        : null;
      continent ? (filter.where.continent = { [Op.eq]: continent }) : null;
      const filteredByProps = await Country.findAll({
        include: Activity,
        ...filter,
      });
      filteredByProps.length < 1
        ? res.status(404).send([])
        : res.send(filteredByProps);
    } else {
      const countries = await Country.findAll({ limit: 10 });
      res.send(countries);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = server;
