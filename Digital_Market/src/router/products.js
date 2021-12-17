const express = require ("express")
const path = require("path")
const multer = require ("multer")
const servidor = express()
const methodOverride = require("method-override");
const { check } = require("express-validator");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")
const productscontroller = require ("../controller/productscontroller")
const usercontroller = require ("../controller/userscontroller")
const router = express.Router();
/*const { routes } = require("../../app");*/

router.get ("/", (req,res) => {
    res.render('home')
})

router.get ("/productCart", (req,res) => {
    res.render('productCart')
})

router.get ("/productdetail", (req,res) => {
    res.render('productdetail')
})

router.get("/list", productscontroller.list);

router.use(methodOverride("_method"));

router.get ("/products/create", productscontroller.crearProducto);

router.post("/create", productscontroller.crearProducto);


router.get ("/products/:id", function (req, res){
    let idProductos = req.params.id
    res.render ("productdetail/" + idProductos)
})

// router.post("/products/create", [
//     check("id").notEmpty(). isNumeric(),
//     check("name").notEmpty(). isString(),
//     check("description").notEmpty(),
//     check("price").notEmpty().isNumeric(),
//     check("discount").notEmpty().isNumeric(),
//     check("category").notEmpty(),
//     check("image").notEmpty(),
// ], 
// productscontroller.create()
//   ); 

router.get("/edit/:idProductos", productscontroller.edit);

router.put("/edit/:id", function (req,res){
    res.send("Editando por PUT");
})

router.delete("/delete/:idProductos", function(req,res){
    res.send("Eliminando con DELETE");
})

module.exports = router