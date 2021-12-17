const express = require ("express")
const path = require("path")
const multer = require ("multer")
const servidor = express()
const methodOverride = require("method-override");
const { check } = require("express-validator");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")
const usersController = require ("../controller/userscontroller")
const usercontroller = require ("../controller/userscontroller")
const router = express.Router();
/*const { routes } = require("../../app");*/

router.get ("/register", (req,res) => {
    res.render('register')
})

router.get ("/login", (req,res) => {
    res.render('login')
})


module.exports = router