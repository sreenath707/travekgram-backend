const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post("/user",userControllers.getUsers);
router.post("/userPost",userControllers.postUsers);


module.exports = router;