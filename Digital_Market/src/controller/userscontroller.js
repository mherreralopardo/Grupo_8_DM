const { ValidationResult, validationResult } = require("express-validator")
const bcryptjs = require("bcryptjs");


module.exports = {

        register: (req, res) => {
        res.cookie("Testiando", { maxAge: 1000 * 30 })
        return res.render("register")

    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("userRegisterForm", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = User.findByField("email", req.body.email);

        if (userInDB) {
            return res.render("userRegisterForm", {
                errors: {
                    email: {
                        msg: "Este email ya está registrado"
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }


        let userCreated = User.create(userToCreate);

        res.redirect("/user/login")
    },

    login: (req, res) => {
        res.render("login")
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField("email", req.body.email)

        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passwordOk) {
                delete userToLogin.passwordGIT
                req.session.userLogged = userToLogin;
                return res.send()
            }

            return res.render("login", {
                errors: {
                    email: {
                        msg: "Error en la contraseña"
                    }
                }
            })
        }

        return res.render("login", {
            errors: {
                email: {
                    msg: "Email no encontrado"
                }
            }
        })
    },

    profile: (req, res) => {
        return res.render()
    },

    logOut: (req, res) => {
        req.session.destroy();
        console.log(req.session)
        return res.redirect("/")
    },
    crear : (req,res) => {
        db.findAll ()
        .then (function(productos){
            return res.render ("/")
        })
    },
    
 guardado: function (req,res){
     db.Usuario.create({
         name: req.body.name,
         email: req.body.email,
         password:req.body.password,
         country: req.body.country,
         image: req.body.image,
     }
     );
     res.redirect("/")
 }
}