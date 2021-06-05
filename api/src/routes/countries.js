const express = require("express");
const server = express();
const { Country } = require("../db");
const { Op } = require("sequelize");
server.use(express.json());

server.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const foundById = await Country.findOne({
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
  const name = req.query.name;
  try {
    if (name) {
      const filteredByName = await Country.findAll({
        where: {
          name: {
            [Op.substring]: name.toLowerCase(),
          },
        },
      });
      filteredByName.length < 1
        ? res.status(404).json("Oops! No countries were found 🥺")
        : res.send(filteredByName);
    } else {
      const countries = await Country.findAll({ limit: 10 });
      res.send(countries);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = server;
