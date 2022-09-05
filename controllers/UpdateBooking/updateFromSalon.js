const Booking = require('../../models/booking.model');
const jwt = require('jsonwebtoken');

const updateFromSalon = async(req,res) => {
    const head = req.headers.authorization;
    const token = head.split(' ');
    const decoded = jwt.verify(token[1], process.env.JWT_AUTH_SECRET);

    const id = req.params.booking_id;
    const {newStatus} = req.body;

    const oldBooking = await Booking.findOne({id})

    try{

        const updatedBooking = await Booking.findOneAndUpdate({id}, {status : newStatus}, {new: true});
        res.status(200).json({
            code : 200,
            message : "Status of the booking successfully changed",
            booking : updatedBooking
        })


    }catch(err){
        console.error(err);
        res.status(400).json({
            code : 400,
            message : "Status of the booking can't changed",
            booking : oldBooking
        })
    }

}

module.exports= {updateFromSalon}