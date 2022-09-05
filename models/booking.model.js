const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user_id: {
        type : String,
    },
    salon_id: {
        type : String,
    },
    booking_id: {
        type: String,
        requried: true,
        unique: true
    },
    service_details :{
        type: Map,
        of: String
    },
    timing : {
        type: String,
        requried: true
    }
    ,
    status : {
        type: String,
        enum : ['accept' , 'reject' , 'waiting', 'complete'],
        default: waiting
    },
    is_cancelled: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "modified_on" } }
  );
  
  const Booking = mongoose.model("Salon", bookingSchema);
  module.exports = Booking;