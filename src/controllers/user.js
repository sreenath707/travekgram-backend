const user = require('../models/userModel');

function getUsers(req,res,next){
    console.log("entered");
    user.find({})
        .then(users=>{
            return res.status(200).json(users);
        })
        .catch(error=>{
            console.log(error);
        })
}

module.exports = {getUsers};