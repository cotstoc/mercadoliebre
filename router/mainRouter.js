const exp = require('constants');
const express = require ('express');
const router = express.Router();
const path = require ('path'); 
const { send } = require('process');
const mainController = require('../controller/mainController')


router.get("/", mainController.index)

router.get("/register", mainController.register)

router.get("/login", mainController.login)

module.exports = router