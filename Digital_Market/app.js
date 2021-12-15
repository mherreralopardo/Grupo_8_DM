const express = require ("express")
const path = require("path")
const multer = require ("multer")
const servidor = express()
const methodOverride = require("method-override");
const { check } = require("express-validator");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")
const usercontroller = require ("./src/controller/userscontroller")
const {crearProducto} = require ("./src/controller/productCreate")
const router = express.Router();
const rutasProductos = require("./src/router/products")

servidor.use(express.static(publicFolderPath));


servidor.use ("/", rutasProductos)

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

