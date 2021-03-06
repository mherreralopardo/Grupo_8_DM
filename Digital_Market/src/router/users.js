const express = require ("express")
const path = require("path")
const multer = require ("multer")
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./public/images/avatars");
    },
    filename: (req,file,cb)=>{
    let filename =  '${Date.now()}_img${path.extname(file. originalfilename)}'
    }
})
const {body} = require("express-validator")
const uploadFile = multer({storage})
const usersController = require ("../controller/userscontroller")
const userscontroller = require ("../controller/userscontroller")
const router = express.Router();
const guestMiddleware = require ("../middlewares/guestMiddleware")
const usercontroller = require("../controller/userscontroller");



/*router.post("/login", [
    check("id").notEmpty(). isNumeric(),
    check("name").notEmpty(). isString(),
    check("description").notEmpty(),
    check("price").notEmpty().isNumeric(),
    check("discount").notEmpty().isNumeric(),
    check("category").notEmpty(),
    check("image").notEmpty(),
], 
productsController.crear()
  ); */


const validations = [ 
    body("name").notEmpty().withMessage("Tenés que escribir un nombre"),
    body("email").notEmpty().withMessage("Tenés que escribir un correo electrónico").bail().isEmail().withMessage("Escribí un formato de correo válido"),
    body("password").notEmpty().withMessage("Tenés que escribir una constraseña"),
    body("country").notEmpty().withMessage("Tenés que elegir un país"),
    body("avatar").custom((value, {req}) => {
        let file = req.file;
        let extensionesAceptadas = [".jpg", ".png", ".jpeg"]

        if (file){
            throw new Error ("Tenés que elegir un avatar")
        } else {
            let extension = path.extname(file.originalnanme);
            if (!extensionesAceptadas.includes(extension)){
            throw new Error ("Las extensiones permitidas son ${extensionesAceptadas.join(",")}");
            }
        }
        return true
    })
]

router.get ("/register", guestMiddleware, userscontroller.register)

router.get ("/login",guestMiddleware, userscontroller.login)

router.post ("/register", uploadFile.single("images"), usersController.processRegister)

// router.get ("/profile/", authMiddleware, usercontroller.profile)

router.get ("/logout/", userscontroller.logOut)



/* SEQUELIZE */
router.get("/register", usercontroller.crear);

router.post("/crear", usercontroller.guardado);



module.exports = router


