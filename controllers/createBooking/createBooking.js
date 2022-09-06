const Booking = require('../../models/booking.model')
const { v4: uuidv4 } = require('uuid');

const createBooking = async(req,res)=>{
    const {user_id,  service_details, timing, status, is_cancelled} = req.body;
    let booking_id_server = uuidv4()
    try{

        const newBooking = await Booking.create({
            user_id, 
            booking_id : booking_id_server, 
            service_details, 
            timing  
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