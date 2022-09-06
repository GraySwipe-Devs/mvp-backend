const Booking = require('../../models/booking.model');
const jwt = require('jsonwebtoken');

const updateFromSalon = async(req,res) => {
    console.log("INSIDE UPDATE FROM SALON??_______------");
    // const head = req.headers.authorization;
    // const token = head.split(' ');
    // const decoded = jwt.verify(token[1], process.env.JWT_AUTH_SECRET);

    const id = req.query.booking_id;
    const {newStatus} = req.body;

    
    try{
        
        const oldBooking = await Booking.findOne({ booking_id : id});
        console.log(oldBooking);

        const updatedBooking = await Booking.findOneAndUpdate({booking_id :id}, {status : newStatus}, {new: true});
        res.status(200).json({
            code : 200,
            message : "Status of the booking successfully changed",
            booking : updatedBooking,
            new_status : updatedBooking.status
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