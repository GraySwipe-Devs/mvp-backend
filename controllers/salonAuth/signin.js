const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Salon = require('../../models/salon.model');
const Joi = require('joi');

const signin = async(req,res) => {
    const { email, password } = req.body;

    const data = {email, password};

    // const loginSchema = Joi.object({
    //     email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) ,
    //     password : Joi.string.pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$')),
    // })
                try{
                    const salon = await Salon.findOne({email});
                    if(!salon){
                        res.status(404).json({
                            status : 'error',
                            message : 'salon not found',
                            code : 404
                        })
                        return;
                    }

                    if(await bcrypt.compare(password, salon.password)){
                        const { phoneNumber, email, salon_id } = salon;
                        const token = jwt.sign( { phoneNumber, email, salon_id },  process.env.JWT_AUTH_SECRET);

                        res.status(200).json({
                            code : 200,
                            message : 'salon signed in successfully',
                            token : token,
                            user
                        })
                    }else{
                        res.status(402).json({
                            message : 'wrong password',
                            code : 402
                        })
                    }
                    
                }catch(err){
                    console.log(err);
                    res.status(403).json({
                        code : 403,
                        message : 'email not found',
                        status : 'error'
                    })
                }
            }


module.exports = {signin}
