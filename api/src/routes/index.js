const { Router } = require("express");
const countries = require("./countries");
const activity = require("./activities");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries);
router.use("/activities", activity);

module.exports = router;

// /countries
// activities

//localhost:3001/activities
