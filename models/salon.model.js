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
    password: {
      type: String,
      required: true,
    },
    salon_id: {
        type: String,
        required: true,
        unique: true
    }
  });
  
  const Salon = mongoose.model("Salon", salonSchema);
  module.exports = Salon;