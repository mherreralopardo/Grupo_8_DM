//modulo express validator 
const {body} = require('express-validator');
const path = require('path');

//express validator
const validacionesFormProducto = [

    body('name').notEmpty().withMessage('El campo nombre no debe estar vacio')
    ,
    body('category').notEmpty().withMessage('El campo categoria  no debe estar vacio')
    ,
    body('price').notEmpty().withMessage('El campo precio  no debe estar vacio').bail()
                 // .isFloat({min : 0.01}).withMessage('Debe ser un numero decimal o entero')

    ,
    body('imagesProducto').custom((value , {req}) => {
        

 
    //validacion de imagenes cargadas
        if(req.files.length == 0){
            throw new Error('No debes dejar vacio el campo de imagenes...');
            return false;
        }else if( req.files.length < 3 ){
            throw new Error('Recuerda debes almenos cargar 3 imagenes...');
            return false;
        }else if(req.files.length > 5){
            throw new Error('Puedes cargar maximo 5 imagenes...');
            return false;
        }else{
            let bandera = false;
            let extencionesAceptadas = ['.jpg', '.png', '.webp'];

            for (let i = 0; i < req.files.length; i++) {
                let fileExtension = path.extname(req.files[i].originalname);

                // console.log(fileExtension);
                if(!extencionesAceptadas.includes(fileExtension)){
                    bandera = false;
                }else{
                    bandera = true;
                }
            };

            // console.log(bandera);

            if(bandera == false){
                throw new Error('Alguno de los archivos cargados no cumple con las extenciones permitidas que son: .jpg, .png , .webp ');
                return false;
            }else{
                return true;
            }
            
        }

        
    })
    
];

module.exports = validacionesFormProducto;