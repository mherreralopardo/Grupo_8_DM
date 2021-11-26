const productsController = {
    "list": function(req,res) {
        const products = require ("../database/products")

         res.render("productsList", {"products": products});
    },
      edit: function(req,res) {
          let idProductos= req.params.idProductos;
         let products;
         let productoEditar = products[idProductos];
         res.render("productoEditar", {idProductos:idProductos});
    },
}
module.exports =productsController;