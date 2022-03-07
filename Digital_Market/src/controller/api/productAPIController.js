const db = require("../../database/models");

const productAPIController ={
 productsList: (req, res) => {
    db.product.findAll({
        include: [{association: ""}]})
    .then(products => {
        console.log(products)
        let respuesta = {
            meta: {
                status : 200,
                total: products.length,
                url: '/data/products'
            },
            data: products.map(product=>{
                return {
                    id: product.id,
                    markId: product..name,
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
    db.product.findByPk(req.params.id)
      .then(product => {
        let respuesta = {
            meta: {
                status: 200,
                url: '/data/products/:id'
            },
            data: products
        }
        res.json(respuesta);
    });
},  

}

module.exports = productAPIController;