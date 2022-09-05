const Salons = require('../../models/booking.model');
const filter = {};

const getSalons = async(req,res) => {
    try{

        const all = await Salons.find(filter);
        res.status(200).json({
            code : 200,
            message : "List of Salons",
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