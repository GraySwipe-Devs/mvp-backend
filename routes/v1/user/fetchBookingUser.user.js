const express = require("express");
const router = express.Router();

const {updateFromSalon} = require('../../../controllers/fetchBooking/fetchBookingUser');
router.patch('/' , fetchBookingUser);

module.exports = router;