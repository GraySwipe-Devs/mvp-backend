const { Router, application } = require("express");
const express = require("express");
const router = express.Router();

const signup = require('./salon/signup.salon');
const signin = require('./salon/signin.salon');
const getSalon = require('./salon/getSalon.salon');

router.use("/v1/salon/register" , signup);
router.use("/v1/salon/login" , signin);
router.use("/v1/salons/getsalon" , getSalon);

module.exports = router;