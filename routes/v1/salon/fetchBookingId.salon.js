const express = require("express");
const router = express.Router();

const {fetchBookingId} = require('../../../controllers/fetchBooking/fetchBookingSalon');
router.get('/id' , fetchBookingId);

module.exports = router;