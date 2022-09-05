const express = require("express");
const router = express.Router();

const {updateFromSalon} = require('../../../controllers/UpdateBooking/updateFromSalon');
router.patch('/' , updateFromSalon);

module.exports = router;