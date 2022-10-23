const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user_id: {
        type : String,
        required: true,
    },
    confirmation_id : {
        type : String,
        required: true,
    },
    salon_id: {
        type : String,
        required: true,
    },
    salon_name: {
        type: String,
        required: true,
    },
    booking_id: {
        type: String,
        requried: true,
        unique: true
    },
    amount :{
        type: Number,
        required : true
    },
    timing : {
        type: String,
        requried: true
    }

    ,
    services : [{
        type: String,
        requried: true
    }]
    ,
    status : {
        type: String,
        enum : ['accept' , 'reject' , 'waiting', 'complete'],
        default: 'waiting'
    },
    is_cancelled: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "modified_on" } }
  );
  
  const Booking = mongoose.model("Booking", bookingSchema);
  module.exports = Booking;