const { Router, application } = require("express");
const express = require("express");
const router = express.Router();

const signup = require('./salon/signup.salon');
const signin = require('./salon/signin.salon');

const userSignin = require('./user/signup.user');
const userLogin = require('./user/login.user');

router.use("/v1/salon/register" , signup);
router.use("/v1/salon/login" , signin);

router.use("/v1/user/register" , userSignin);
router.use("/v1/user/login" , userLogin);

module.exports = router;