const express = require("express");
const server = express();
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

server.use(express.json());

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${id}`
    );
    let foundById = await Country.findByPk(id.toUpperCase(), {
      include: Activity,
    });
    const dataValues = {
      nativename: response.data.nativeName,
      capital: response.data.capital,
      subregion: response.data.subregion,
      language: response.data.languages[0].name,
    };
    res.send({ ...foundById.dataValues, ...dataValues });
  } catch (error) {
    res.status(400).send(error);
  }
});

server.get("/", async (req, res) => {
  const { name, continent } = req.query;
  try {
    if (name || continent) {
      const filter = { where: {} };
      name ? (filter.where.name = { [Op.iLike]: `%${name}%` }) : null;
      continent ? (filter.where.continent = { [Op.eq]: continent }) : null;
      const filteredByProps = await Country.findAll({
        include: [{ model: Activity, require: true }],
        ...filter,
      });
      filteredByProps.length < 1
        ? res.send({ error: "No country was found" })
        : res.send(filteredByProps);
    } else {
      const countries = await Country.findAll({
        include: [{ model: Activity, require: true }],
      });
      res.send(countries);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = server;
