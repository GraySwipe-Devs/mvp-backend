const Booking = require('../../models/booking.model')
const { v4: uuidv4 } = require('uuid');

const createBooking = async(req,res)=>{
    const {user_id, salon_id , amount, timing, confirmation_id} = req.body;
    let booking_id_server = uuidv4()
    try{

        const newBooking = await Booking.create({
            user_id, 
            salon_id ,
            booking_id : booking_id_server, 
            amount, 
            timing,
            confirmation_id  
        })

        res.status(200).json({
            status : 'success',
            message : 'booked successfully',
            newBooking,
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