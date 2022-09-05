const express = require("express");
const router = express.Router();

const {getSalons} = require('../../../controllers/getSalonAndServices/getSalon');
router.get('/' , getSalons);

module.exports = router;