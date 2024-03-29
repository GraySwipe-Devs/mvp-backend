const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const schema = require('../../validators/v1/project');
const salonSchema = schema.createSalonSchema;
const Salon = require('../../models/salon.model')
const { v4: uuidv4 } = require('uuid');

const signup = async(req,res)=>{
    const {name, ownerName, email, phoneNumber, password: plainTextPassword, comfirmPassword, location, images } = req.body;

    const data = {name, ownerName, email, phoneNumber, plainTextPassword, comfirmPassword, images, location};
    let service = {}
    try{
        const password = await bcrypt.hash(plainTextPassword, 10); // salt is 10;

        const newSalon = await Salon.create({
            name,
            ownerName,
            email,
            phoneNumber,
            service,
            password,
            images,
            salon_id : uuidv4(),
            location
        })

        const salonID = newSalon.salon_id;
        const token = jwt.sign({ phoneNumber, email, salonID }, process.env.JWT_AUTH_SECRET);

        res.status(200).json({
            status : 'success',
            message : 'salon owner registered successfully',
            code : 200
        })

    }catch(err){
        console.log(err);

        res.status(400).json({
            status : 'failed',
            message : 'email or phone already exists',
            code : 400
        })
    }

}

module.exports = {signup}