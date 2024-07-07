const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    first_name: {
        type : String,
        required : true
    },
    last_name : {
        type : String
    },
    email : {
        type : String,
        required : true,
    },
    gender : {
        type : String
    }

})

const User = mongoose.model("user", userschema)

module.exports = User;