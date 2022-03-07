let fs = require('fs');
const path = require("path");
const { validationResult } = require('express-validator')
const Sequelize = require('sequelize')
const db = require('../database/models');
const products = db.Products

const productscontroller = {
    //lista de productos
   list: function(req,res) {
       db.products.findAll({
        include: [{association: "categories"}]})
       .then(function (products){
       res.render('products', {products: products});
       })
       .catch(function(e){
       console.log(e)
       })
   },
      //detalle
      
  detail: function (req,res){
    db.products.findByPk(req.params.id, {
        include: [{association: "users"}]}) 
    .then (function (unproducts){
        res.render("productdetail", {unproducts:unproducts})
    })
    .catch(function(e) {
        console.log(e)
    })
},
     //crear
     crear : function(req, res){
        db.products.create({
            nameId: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            image: req.file.filename,
            type: req.body.type,
            color: req.body.color,
            categoriesId: req.body.categoriesId
        })
        
        res.redirect("/");
    },
    //editar
     edit:function(req,res){
        let pedidoproducto = products.findAll(req.params.id);
        let pedidoCliente = db.users.findAll();
    
        Promise.all([pedidoproducto, pedidoCliente])
        .then (function([product, user]){
            res.render("/productlist")
        })
        .catch(function(e) {
            console.log(e)
        })
    },
    //actualizar
    actualize: function(req,res){
        products.update({
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
        })
        .catch(function(e){
            console.log(e)
        })

        res.redirect('/')
    },

  
   
guardado: function (req,res){
   products.create({
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
//borrar
delete: function (req,res){
    products.destroy ({
        where: {
            id: req.params.id
        }
    })
    res.redirect("/productlist")
},
};


   
/*if (error.isEmpty()) {
    JSON.stringify(req.body)
    fs.appendFile( "/database/products.json", req.body, callback )
    
           res.send("Producto creado con éito");
       
       } else {
           res.send("error, no se pudo guardar" + error);
       }
    }
    }
    */

    module.exports = productscontroller;