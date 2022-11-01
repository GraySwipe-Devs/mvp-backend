const { required } = require("joi");
const mongoose = require("mongoose");
const salonSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    ownerName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber : {
        type : String,
        unique: true,
        required: true
    },
    services :{
        type: Map,
        of: String
    },
    address : {
        type: [String],
        required: true
    },
    location : {
        type: [String],
        required: true
    },
    image : {
        type: [Buffer],
        required: true
    },
    password: {
      type: String,
      required: true,
    },
    salon_id: {
        type: String,
        required: true,
        unique: true
    },
    is_deleted : {
        type : Boolean,
        default : false,
    }
  });
  
  const Salon = mongoose.model("Salon", salonSchema);
  module.exports = Salon;