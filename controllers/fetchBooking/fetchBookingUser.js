const Booking = require('../../models/booking.model');

const fetchBookingUser = async(req,res) => {
    try{

        const id = req.params.user_id;
        const all = await Booking.find({ user_id: id});
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

module.exports = { fetchBookingUser }