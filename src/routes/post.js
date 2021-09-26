const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/post');

router.get("/post",postControllers.getPosts);
router.post("/post",postControllers.postPost);



module.exports = router;