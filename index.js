const server = require("./src/app.js");
const fetch = require("node-fetch");
const { conn, Country } = require("./src/db.js");
const PORT = process.env.PORT || 3001;
const path = require("path");
const express = require("express");

server.use(express.static(path.join(__dirname, "client/build")));

fetch("https://restcountries.eu/rest/v2/all")
  .then((r) => r.json())
  .then((r) => {
    r.forEach((el) => {
      let country = {
        id: el.alpha3Code,
        name: el.name === "Åland Islands" ? "Aland Islands" : el.name,
        flag: el.flag,
        continent: el.region,
        area: el.area,
        population: el.population,
      };
      Country.create(country);
    });
  })
  .catch((err) => console.log(err));

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
  });
});
