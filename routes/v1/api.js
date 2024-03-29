const { Router, application } = require("express");
const express = require("express");
const router = express.Router();

const signup = require('./salon/signup.salon');
const signin = require('./salon/signin.salon');
const getSalon = require('./salon/getSalon.salon');
const updateFromSalon = require('./salon/updatesFromSalon.salon');

const userSignin = require('./user/signup.user');
const userLogin = require('./user/login.user');
const userUpdate = require("./user/updateFromUser.user");

const fetchBookingUser = require('./user/fetchBookingUser.user');
const fetchBookingSalon = require('./salon/fetchBookingSalon.salon')
const fetchBookingId = require('./salon/fetchBookingId.salon')

const createBooking = require('./user/createBooking.user');
// const updateBookingUser = require('./')

router.use("/v1/salon/register" , signup);
router.use("/v1/salon/login" , signin);

// get salon list
router.use("/v1/salons/getsalon" , getSalon);

// update from salon
router.use('/v1/salon/booking/update' , updateFromSalon )

router.use("/v1/user/register" , userSignin);
router.use("/v1/user/login" , userLogin);
router.use("/v1/user/booking/update", userUpdate)

// fetching bookings
router.use("/v1/user/fetchBooking" , fetchBookingUser);
router.use("/v1/salon/fetchBooking", fetchBookingSalon);
router.use("/v1/salon/fetchBooking", fetchBookingId);

//creating booking
router.use("/v1/user/createbooking" , createBooking)

module.exports = router;