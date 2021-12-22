const express = require ("express")
const session = require ("express-session")
const path = require("path")
const multer = require ("multer")
const servidor = express()
const methodOverride = require("method-override");
const { check } = require("express-validator");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")
const usercontroller = require ("./src/controller/userscontroller")
const router = express.Router();
const rutasProductos = require("./src/router/products")
const rutasUsers = require("./src/router/users")
const cookies = require("cookie-parser")
const userLoggedMiddleware = require ("./src/middlewares/userLoggedMiddleware")

servidor.use(express.static(publicFolderPath));



servidor.use (session({
    secret: "shhh",
    resave: false, 
    saveUninitialized: false,     
}))

servidor.use (cookies())
servidor.use (userLoggedMiddleware)
servidor.use ("/", rutasProductos)
servidor.use ("/", rutasUsers)

servidor.set('view engine', 'ejs')

servidor.set('views', path.join(__dirname, 'src/views'))

servidor.listen (5050, ()=> {
    console.log("Servidor funcionando")
})

/*var upload = multer ({storage:storage})

var storage = multer.diskStorage ({
    destination: function (req,file,cb) {
        cb (null, "/images/productImages");
    },
    filename: function (req,file,cb) { cb (null, file.fieldname + "-" + Date.now())
    }
})

router.post('/productCreate', upload.any(), usersController.save); */

module.exports = servidor;

