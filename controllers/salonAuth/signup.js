const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schema = require('../../validators/v1/project');
const salonSchema = schema.createSalonSchema;
const Salon = require('../../models/salon.model')
const { v4: uuidv4 } = require('uuid');

const signup = async(req,res)=>{
    const {name, ownerName, email, phoneNumber, password: plainTextPassword, comfirmPassword, location } = req.body;

    const data = {name, ownerName, email, phoneNumber, password, comfirmPassword};

    Joi.validate(data, salonSchema, (err,value)=> {
        if (err) {
            res.status(401).json({
              code: 401,
              message: 'invalid credentials entered',
              status: 'error',
              data : data
            });
          } else {
            const password = await bcrypt.hash(plainTextPassword, 10); // salt is 10;

            try{
                const newSalon = await Salon.create({
                    name,
                    ownerName,
                    email,
                    phoneNumber,
                    password,
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
                    code : 200
                })
            }
          }
    } )

}

module.exports = {signup}