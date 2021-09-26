const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.get("/user",userControllers.getUsers);


module.exports = router;