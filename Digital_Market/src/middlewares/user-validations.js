const {check} = require('express-validator')

//configuracion de validaciones del formulario de registro de usuario
const validationUserForm = [
    check('firstName')
      .notEmpty().ltrim().rtrim().withMessage('Debes escribir un nombre').bail()
      .isLength({min: 2}).withMessage('Deben ser al menos 2 caracteres').bail(),
    check('lastName')
      .notEmpty().ltrim().rtrim().withMessage('Debes escribir un apellido').bail()
      .isLength({min: 2}).withMessage('Deben ser al menos 2 caracteres').bail(),
    check('DNI')
      .notEmpty().ltrim().rtrim().withMessage('Falta DNI').bail()
      .isInt().withMessage('Debes ingresar un número').bail()
      .isLength({min: 8}).withMessage('Deben ser al menos 8 números').bail(),
    check('city')
      .notEmpty().ltrim().rtrim().withMessage('Falta ciudad').bail(),
    check('email')
      .notEmpty().ltrim().rtrim().withMessage('Falta dirección de correo electrónico').bail()
      .isEmail().withMessage('Debes escribir un e-mail válido').bail(),
    check('password')
      .notEmpty().ltrim().rtrim().withMessage('Debes llenar el campo').bail()
      .isLength({min: 8}).withMessage('La contraseña debe tener 8 o más caracteres').bail(),
    check('terms')
    
    
      .isBoolean().withMessage('Debes aceptar los términos y condiciones').bail(),
    // check('avatar-img')

    //   .isMimeType().withMessage('').bail() //NO SE SI ESTO ESTA BIEN

      // .custom((value, { req }) => {
      //   switch (req.file.mimetype) {
      //     case image/avif:
      //     case image/jpeg:
      //     case image/png:
      //     case image/svg+xml:
      //     case "":
      //       return true
      //     break;
      //     default:
      //       return false;
      //   }
        
      // }).withMessage('Solo se aceptan formatos de imagen: avif, jpeg, png, svg+xml')
  ]

module.exports = validationUserForm;