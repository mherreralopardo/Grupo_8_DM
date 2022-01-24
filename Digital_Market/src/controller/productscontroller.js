const prod = require ("../../database/models/Productos");
const { validationResult } = require("express-validator");
const { db } = prod;



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
       .then (function(productos){
           return res.render ("/")
       })
   },
   
guardado: function (req,res){
    db.Producto.create({
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
    let pedidoproducto = db.Productos.findAll(req.params.id);
    let pedidoUsuario = db.Usuarios.findAll();

    Promise.all([pedidoproducto, pedidoUsuario])
    .then (function([producto, usuario]){
        res.render("/productlist")
    })
},

actualizar: function(req,res){
    db.Producto.update({
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
    db.Producto.destroy ({
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