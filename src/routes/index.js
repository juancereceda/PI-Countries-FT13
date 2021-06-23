const { Router } = require("express");
const countries = require("./countries");
const activity = require("./activities");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries);
router.use("/activities", activity);

module.exports = router;

// /countries
// activities
