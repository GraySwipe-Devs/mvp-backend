const Booking = require('../../models/booking.model');


const fetchBookingSalon = async(req,res) => {
    try{

        const id = req.query.salon_id;
        const all = await Booking.find({salon_id : id});
        res.status(200).json({
            code : 200,
            message : "List of Bookings",
            list : all
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            code : 400,
            message : "Something's wrong on the servers",
        })
    }
}

const fetchBookingId = async(req,res) => {
    try{

        const id = req.query.id;
        const all = await Booking.find({confirmation_id : id});
        res.status(200).json({
            code : 200,
            message : "List of Bookings",
            list : all
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            code : 400,
            message : "Something's wrong on the servers",
        })
    }
}

module.exports = { fetchBookingSalon, fetchBookingId }