const server = require("./src/app.js");
const { conn, Country, Activity } = require("./src/db.js");
const fetch = require("node-fetch");

fetch("https://restcountries.eu/rest/v2/all")
  .then((r) => r.json())
  .then(async (r) => {
    await r.forEach((el) => {
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

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Listening on port 3001..."); // eslint-disable-line no-console
  });
});
