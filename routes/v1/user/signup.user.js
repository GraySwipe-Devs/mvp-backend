const express = require("express");
const router = express.Router();

const {UserSignup} = require('../../../controllers/userAuth/UserSignup');
router.post('/' , UserSignup);

module.exports = router;