const productsController = {
    "list": function(req,res) {
        let products = //importar products.json//;

         res.render("productsList", {"products": products});
    },
      edit: function(req,res) {
          let idProductos= req.params.idProductos;
         let products= //importar products.json//
         let productoEditar= products[idProductos];
         res.render("productoEditar", {idProductos:idProductos});
    },
}
module.exports =productsController;