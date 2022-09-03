const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../../models/user.model');
const Joi = require('joi');

const UserLogin = async(req,res) => {
    const { email, password } = req.body;

    const data = {email, password};

    // const loginSchema = Joi.object({
    //     email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) ,
    //     password : Joi.string.pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$')),
    // })
                try{
                    const user = await User.findOne({email});
                    if(!user){
                        res.status(404).json({
                            status : 'error',
                            message : 'user not found',
                            code : 404
                        })
                        return;
                    }

                    if(await bcrypt.compare(password, user.password)){
                        const { phoneNumber, email, user_id } = user;
                        const token = jwt.sign( { phoneNumber, email, user_id },  process.env.JWT_AUTH_SECRET);

                        res.status(200).json({
                            code : 200,
                            message : 'user signed in successfully',
                            token : token,
                            data : {
                                name : user.name,
                                email : user.email
                            }
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


module.exports = {UserLogin}