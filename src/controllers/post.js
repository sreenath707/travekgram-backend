const post = require('../models/postModel');

function getPosts(req,res,next){
        post.find({})
        .then(posts=>{
            return res.status(200).json(posts);
        })
        .catch(error=>{
            console.log(error);
        })
}

function postPost(req,res,next){

    console.log(req.body);

    post.insertMany([req.body])
    .then(()=>{
        console.log("inserted");
    })
    .catch(error=>{
        console.log(error);
    })
}


module.exports = {getPosts,postPost};