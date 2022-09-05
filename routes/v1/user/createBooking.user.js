const express = require("express");
const router = express.Router();

const {UserSignup} = require('../../../controllers/createBooking/createBooking');
router.post('/' , createBooking);

module.exports = router;