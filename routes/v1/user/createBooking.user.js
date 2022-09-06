const express = require("express");
const router = express.Router();

const {createBooking} = require('../../../controllers/createBooking/createBooking');
router.post('/' , createBooking);

module.exports = router;