const express = require("express");
const router = express.Router();

const {updateFromUser} = require('../../../controllers/UpdateBooking/updateFromUser');
router.patch('/' , updateFromUser);

module.exports = router;