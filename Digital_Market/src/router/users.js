const express = require ("express")
const path = require("path")
const multer = require ("multer")
const servidor = express()
const methodOverride = require("method-override");
const { check } = require("express-validator");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")
const usersController = require ("../controller/userscontroller")
const userscontroller = require ("../controller/userscontroller")
const router = express.Router();
const guestMiddleware = require ("../middlewares/guestMiddleware")
const authMiddleware = require ("../middlewares/authMiddleware")
const { routes } = require("../../app")

router.get ("/register", guestMiddleware, userscontroller.register)

router.get ("/login", guestMiddleware, userscontroller.login)

// router.get ("/profile/", authMiddleware, usercontroller.profile)

router.get ("/logout/", userscontroller.logOut)

module.exports = router