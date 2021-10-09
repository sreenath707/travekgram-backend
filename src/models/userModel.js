const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,        
    },
    password : {
        type : String,
        required : true
    },
    bio : {
        type : String
    },
    profilePic : {
        type : String
    },
    email : {
        type : String,
        required  : true,
        unique : true
    }
});

const user = mongoose.model('Users',userSchema);

module.exports = user;