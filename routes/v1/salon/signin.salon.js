const express = require("express");
const router = express.Router();

const signin = require('../../../controllers/salonAuth/signin');
router.post('/' , signin);

module.exports = router;