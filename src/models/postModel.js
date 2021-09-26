const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,        
    },
    location : {
        type : Object,
        required : true
    },
    profilePic : {
        type : String,
        required  : true,
    },
    caption : {
        type : String,
        required : true,
    }
});

const post = mongoose.model('posts',postSchema);

module.exports = post;