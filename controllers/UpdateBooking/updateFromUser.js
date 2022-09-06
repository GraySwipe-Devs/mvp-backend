const Booking = require('../../models/booking.model');
const jwt = require('jsonwebtoken');

const updateFromUser = async(req,res) => {
    // const head = req.headers.authorization;
    // const token = head.split(' ');
    // const decoded = jwt.veri qfy(token[1], process.env.JWT_AUTH_SECRET);

    // console.log("INSIDE UPDATE FROM USER------------------->>>>>>>>>>>>");

    const id = req.query.booking_id;
    const { timingsUpdate} = req.body;

    const oldBooking = await Booking.findOne({booking_id :id})
    try{
        const updatedBooking2 = await Booking.findOneAndUpdate({booking_id :id}, {timings : timingsUpdate}, {new: true});
        res.status(200).json({
            code : 200,
            message : "Status of the booking successfully changed",
            booking : updatedBooking2
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

module.exports= {updateFromUser}