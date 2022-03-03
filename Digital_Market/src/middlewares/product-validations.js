const {check} = require('express-validator')

//configuracion de validaciones del formulario de creacion de producto


const validationProductForm = [
    check('name')
      .notEmpty().ltrim().rtrim().withMessage('Debes escribir un nombre').bail()
      .isLength({min: 5}).withMessage('El nombre de tener 5 o más caracteres').bail(),
    check('category')
      .notEmpty().withMessage('Debes seleccionar una categoría').bail(),
    check('size')
      .notEmpty().withMessage('Debes seleccionar un tamaño').bail(),
    check('price')
      .notEmpty().ltrim().rtrim().withMessage('Debes indicar un precio').bail()
      .isInt().withMessage('Debes ingresar un número').bail(),
    /*check('image')
       .notEmpty().withMessage('Debes cargar al menos una imagen').bail()
       .custom((value, { req }) => {
         switch (req.files.mimetype) {
           case 'image/avif':
           case 'image/jpeg':
           case 'image/jpg':  
           case 'image/png':
           case 'image/svg+xml':
             return true
           break;
           default:
             return false;
         }
       }).withMessage('Solo se aceptan formatos de imagen: avif, jpeg, png, svg+xml').bail(),
*/
    check('description')
      .notEmpty().ltrim().rtrim().withMessage('Debes describir el producto').bail()
      .isLength({min: 20}).withMessage('Describe con al menos 20 caracteres').bail(),
  ]

module.exports = validationProductForm;