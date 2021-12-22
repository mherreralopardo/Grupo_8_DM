const {ValidationResult, validationResult} = require ("express-validator")
const bcryptjs = require ("bcryptjs");
const User = require ("../models/User");

module.exports = {

register: (req,res) =>{ 
res.cookie("Testiando", { maxAge : 1000 * 30})
return res.render("userRegisterForm")

},

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render ("userRegisterForm", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = User.findByField ("email", req.body.email);

        if (userInDB) {
            return res.render ("userRegisterForm", {
                errors: {
                    email: { 
                        msg: "Este email ya está registrado"
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ... req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }
    

   let userCreated = User.create(userToCreate);

    return res.redirect ("/user/login")
},

    login: (req, res) => {
        return res.render ("/user/login")
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByField("email", req.body.email)
        
        if(userToLogin){
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passwordOk){
                delete userToLogin.passwordGIT
                req.session.userLogged = userToLogin;
                return res.send ()
            }

            return res.render ("login", {
                errors: {
                    email: {
                        msg: "Error en la contraseña"
                    }
                }
            })
        }

        return res.render ("login", {
            errors: {
                email: {
                    msg: "Email no encontrado"
                }
            }
        })
    },

    profile: (req,res) => {
        return res.render()
    },

    logOut: (req,res) => {
        req.session.destroy();
        console.log(req.session)
        return res.redirect ("/")
    }
}