const express = require("express");
const router = express.Router();

const {UserLogin} = require('../../../controllers/userAuth/UserLogin');
router.post('/' , UserLogin);

module.exports = router;