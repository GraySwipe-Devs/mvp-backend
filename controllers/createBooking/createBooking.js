const Booking = require('../../models/Booking.model')
const { v4: uuidv4 } = require('uuid');

const createBooking = async(req,res)=>{
    const {user_id, booking_id, service_details, timing, status, is_cancelled} = req.body;

    try{

        const newBooking = await Booking.create({
            user_id, 
            booking_id : uuidv4(), 
            service_details, 
            timing, 
            status, 
            is_cancelled    
        })

        res.status(200).json({
            status : 'success',
            message : 'booked successfully',
            code : 200
        })

    }catch(err){
        console.log(err);

        res.status(400).json({
            status : 'failed',
            message : 'booking already exists',
            code : 400
        })
    }

}

module.exports = {createBooking}