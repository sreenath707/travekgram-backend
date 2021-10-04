const user = require('../models/userModel');

function getUsers(req,res,next){
    console.log(req.body);
    user.find(req.body)
        .then(users=>{
            return res.status(200).json(users);
        })
        .catch(error=>{
            console.log(error);
        })
}

function postUsers(req,res,next){
    console.log(req.body);
    user.insertMany([req.body])
        .then(users=>{
            console.log("inserted");
            return res.status(200).json({});
        })
        .catch(error=>{
            console.log(error);
        })
}

module.exports = {getUsers,postUsers};