const { validationResult } = require("express-validator");
const products = require("../database/products");

const crearProducto = (req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
           

        res.send("Producto creado con éito");
    
    } else {
        res.send("error, no se pudo guardar");
    }
};

module.exports = {
    crearProducto,
}