const { validationResult } = require("express-validator");

const path = require("path");
let fs = require('fs')

//Nos traemos la sintaxis de Sequelize//
const db = require('../../database/models');
//Aca deberiamos literalmente llamar a la tabla//
const prod = db.Productos


const productsController = {
   list: function(req,res) {
        res.render("productsList", {"products": products});
   },
     edit: function(req,res) {
        let idProductos= req.params.id;
        let products = productos;
        let productoEditar = products[idProductos];
        res.render("productoEditar", {idProductos:idProductos});
   },
   crear : (req,res) => {
       db.findAll ()
       .then (function(prod){
           return res.render ("/")
       })
   },
   
guardado: function (req,res){
   prod.create({
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
    prod.findAll()
    .then(function(productos){
        res.render("productlist", {productos:productos})
    })
},

detalle: function (req,res){
    prod.findByPk(req.params.id, {
        include: {association: "Usuarios"}, /* insertar otras tablas que tengan relacion*/
    }) 
    .then (function (productos){
        res.render("productdetail", {productos:productos})
    })
},

editar: function(req,res){
    let pedidoproducto = prod.findAll(req.params.id);
    let pedidoUsuario = db.Usuarios.findAll();

    Promise.all([pedidoproducto, pedidoUsuario])
    .then (function([producto, usuario]){
        res.render("/productlist")
    })
},

actualizar: function(req,res){
    prod.update({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        image: req.body.image,
        type:req.body.type,
        color: req.body.color
    }, {
        where: {
            id:req.params.id
        }
    });

    res.render("/productsdetail/"+req.paras.id)
},

borrar: function (req,res){
    prod.destroy ({
        where: {
            id: req.params.id
        }
    })
    res.redirect("/productlist")
}
,
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