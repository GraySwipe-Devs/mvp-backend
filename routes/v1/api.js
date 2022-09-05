const { Router, application } = require("express");
const express = require("express");
const router = express.Router();

const signup = require('./salon/signup.salon');
const signin = require('./salon/signin.salon');
const getSalon = require('./salon/getSalon.salon');
const updateFromSalon = require('./salon/updatesFromSalon.salon');

router.use("/v1/salon/register" , signup);
router.use("/v1/salon/login" , signin);
router.use("/v1/salons/getsalon" , getSalon);
router.use('/v1/salon/booking/update/:booking_id' , updateFromSalon )

module.exports = router;