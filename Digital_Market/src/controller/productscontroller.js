 const prod = require ("../database/products")
 const { validationResult } = require("express-validator");
 const productos = JSON.parse(JSON.stringify(prod))

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
        res.render("productCreate", {"products": products});
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