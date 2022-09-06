const express = require("express");
const router = express.Router();

const {fetchBookingSalon} = require('../../../controllers/fetchBooking/fetchBookingSalon');
router.get('/' , fetchBookingSalon);

module.exports = router;