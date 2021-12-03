const { validationResult } = require("express-validator");
const products = require("../database/products");
const { appendFile } = require("fs");
const path = require("path")

const crearProducto = (req, res) => {
    const error = validationResult(req);
    
    if (error.isEmpty()) {
           
fs.appendFile( "/database/products.json", req, callback )

        res.send("Producto creado con éito");
    
    } else {
        res.send("error, no se pudo guardar");
    }
};

module.exports = {
    crearProducto,
}