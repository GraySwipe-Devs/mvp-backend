const { findOne } = require('../../models/salon.model');
const Salons = require('../../models/salon.model');

// Leaving it like this and not connecting to routes because right now we will be adding these manually to db from a google form ;
const addService = async(req,res) => {
    const {salonID , details } = req.body ;
    const {service_no , price, desc} = details;
    
    try{

        const salon = await Salons.findOne({salon_id});
        if(!salon){
            res.status(404).json({
                status : 'error',
                message : 'salon not found',
                code : 404
            })
            return;
        }
        let prev = salon.services;
        prev.push(details);
        const sal = await Salons.findOneAndUpdate(
            {salon_id : salonID},
            { services : prev },
            { new: true }
        )

    }catch(err){
        console.log(err);
    }
}

module.exports = {addService}