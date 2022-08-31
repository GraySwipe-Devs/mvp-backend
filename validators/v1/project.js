import Joi from 'joi'

const createUserSchema = Joi.object({
    firstName : Joi.string().alphanum().min(3).max(20).required(),
    lastName : Joi.string().alphanum().min(3).max(30),
    email : Joi.string().pattern(new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) ,
    phoneNumber : Joi.length(10).pattern(new RegExp('/^[0-9]+$/')).required(),
    password : Joi.string.pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$')),
    comfirmPassword : Joi.ref('password')

})

const createSalonSchema = Joi.object({
    name : Joi.string().alphanum().min(3).max(20).required(),
    ownerName : Joi.string().alphanum().min(3).max(20).required() ,
    email : Joi.string().pattern(new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) ,
    phoneNumber : Joi.length(10).pattern(new RegExp('/^[0-9]+$/')).required(),
    password : Joi.string.pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$')),
    comfirmPassword : Joi.ref('password'),
})

export {
    createSalonSchema,
    createUserSchema
} 