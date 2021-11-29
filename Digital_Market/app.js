const express = require ("express")
const path = require("path")
const multer = require ("multer")
const servidor = express()
const methodOverride = require("method-override");
const { check } = require("express-validator");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")
const productoscontroller = require ("./src/controller/productscontroller")
const usercontroller = require ("./src/controller/userscontroller")
const {crearProducto} = require ("./src/controller/productCreate")
const router = express.Router();

servidor.use(express.static(publicFolderPath));

servidor.set('view engine', 'ejs')

servidor.set('views', path.join(__dirname, 'src/views'))

servidor.listen (5050, ()=> {
    console.log("Servidor funcionando")
})

servidor.get ("/", (req,res) => {
    res.render('home')
})

servidor.get ("/productCart", (req,res) => {
    res.render('productCart')
})

servidor.get ("/register", (req,res) => {
    res.render('register')
})

servidor.get ("/login", (req,res) => {
    res.render('login')
})

servidor.get ("/productdetail", (req,res) => {
    res.render('productdetail')
})

servidor.get("/list", productoscontroller.list);

servidor.use(methodOverride("_method"));

servidor.get ("/products/create", function (req, res){
        res.render ("productCreate")
})

servidor.post("/crearproducto", [
    check("id").notEmpty(). isNumeric(),
    check("name").notEmpty(). isString(),
    check("description").notEmpty(),
    check("price").notEmpty().isNumeric(),
    check("discount").notEmpty().isNumeric(),
    check("category").notEmpty(),
    check("image").notEmpty(),
    check("type").notEmpty(),
    check("color").notEmpty().isString()
], 
crearProducto
  ); 

servidor.get("/edit/:idProductos", productoscontroller.edit);

servidor.put("/edit", function (req,res){
    res.send("Editando por PUT");
})

servidor.delete("/delete/:idProductos", function(req,res){
    res.send("Eliminando con DELETE");
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

