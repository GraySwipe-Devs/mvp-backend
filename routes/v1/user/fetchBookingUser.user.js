const express = require("express");
const router = express.Router();

const {fetchBookingUser} = require('../../../controllers/fetchBooking/fetchBookingUser');
router.patch('/' , fetchBookingUser);

module.exports = router;