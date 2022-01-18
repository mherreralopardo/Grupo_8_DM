const prod = require ("../../database/models/productos");
const { validationResult } = require("express-validator");
const db = require ("../../database/models");
const User = require();


const productsController = {
   list: function(req,res) {
        res.render("productsList", {"products": products});
   },
     edit: function(req,res) {
         let idProductos= req.params.idProductos;
        let products = productos;
        let productoEditar = products[idProductos];
        res.render("productoEditar", {idProductos:idProductos});
   },
   crear : (req,res) => {
       db.Productos.findAll ()
       .then (function(productos){
           return res.render ("/")
       })
   },
   
guardado: function (req,res){
    db.Producto({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        image: req.body.image,
        type:req.body.type,
        color: req.body.color
    }
    );
    res.redirect("/")
},

listado: function (req,res){
    db.productos.findAll()
    .then(function(productos){
        res.render("productlist", {productos:productos})
    })
},

detalle: function (req,res){
    db.productos.findByPk(req.params.id, {
        include: {association: "Usuarios"}, /* insertar otras tablas que tengan relacion*/
    }) 
    .then (function (productos){
        res.render("productdetail", {productos:productos})
    })
},

editar: function(req,res){
    let pedidoproducto = db.productos.findAll(req.params.id);
    let pedido
},

crearProducto: (req, res) => {
   const error = validationResult(req);
   
   if (error.isEmpty()) {
JSON.stringify(req.body)
fs.appendFile( "/database/products.json", req.body, callback )

       res.send("Producto creado con éito");
   
   } else {
       res.send("error, no se pudo guardar" + error);
   }
}
}

module.exports = productsController;