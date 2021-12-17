const path  = require ("path")
const { body } = require ("express-validator")

module.exports = [
    body ("name").notEmpty().withMessage("Escrbií tu nombre"),
    body ("email").notEmpty().withMessage("Escrbií tu Email").isEmail().withMessage("Introduce un formato de email válido"),
    body ("password").notEmpty().withMessage("Tu contraseña..."),
    body ("pais").notEmpty().withMessage("Elige tu país de residencia"),
    body ("image").custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if (!file){
            throw new Error ("Tienes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ("Las extensiones de archivo permitidas son ${acceptedExtensions.join(",")}");
            }
        }
        return true
    })
    ]