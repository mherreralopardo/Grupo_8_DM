const db = require("../../database/models");

const productAPIController ={
 productsList: (req, res) => {
    db.Product.findAll({
        include: [{association: "Mark"}]})
    .then(products => {
        console.log(products)
        let respuesta = {
            meta: {
                status : 200,
                total: products.length,
                url: '/data/product'
            },
            data: products.map(product=>{
                return {
                    id: product.id,
                    markId: product.Mark.name,
                    model: product.model,
                    price: product.price,
                    discount: product.discount,
                    description: product.description,
                    camera: product.camera,
                    screen: product.screen,
                    memory: product.memory,
                    unlocking: product.unlocking,
                    image: product.image
                    
                }
            })
        }
            res.json(respuesta);
        })
},
///////////////////////////////////////////////////////////////
// detalle de producto
productDetail: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(product => {
        let respuesta = {
            meta: {
                status: 200,
                url: '/data/product/:id'
            },
            data: product
        }
        res.json(respuesta);
    });
},  

}

module.exports = productAPIController;