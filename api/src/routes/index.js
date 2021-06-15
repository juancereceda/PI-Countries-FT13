const { Router } = require("express");
const countries = require("./countries");
const { Country } = require("../db");
const activity = require("./activities");
const fetch = require("node-fetch");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

fetch("https://restcountries.eu/rest/v2/all")
  .then((r) => r.json())
  .then((r) => {
    r.forEach((el) => {
      let country = {
        id: el.alpha3Code,
        name: el.name,
        flag: el.flag,
        continent: el.region,
        area: el.area,
        population: el.population,
      };
      Country.create(country);
    });
  })
  .catch((err) => console.log(err));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries);
router.use("/activities", activity);

module.exports = router;

// /countries
// activities

//localhost:3001/activities
