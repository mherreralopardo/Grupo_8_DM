 const prod = require ("../database/products")
 const productos = JSON.parse(JSON.stringify(prod))

const productsController = {
    "list": function(req,res) {
         res.render("productsList", {"products": products});
    },
      edit: function(req,res) {
          let idProductos= req.params.idProductos;
         let products = productos;
         let productoEditar = products[idProductos];
         res.render("productoEditar", {idProductos:idProductos});
    },

    
}



module.exports = productsController;