const { validationResult } = require('express-validator');
const db = require("../database/models")
const bcryptjs = require("bcryptjs");
const fs = require('fs');
const path = require('path');

const usercontroller = {
    //list
    usersList: (req, res) => {
        db.users.findAll({
            include: [{association: "cart"}]})
        .then(function(users){
            res.render('./users/usersList', {users});
        })
        .catch(function(e){
            console.log(e)
        }) 
    },
    //detalle
    usersDetail: (req, res) => {
        db.users.findByPk(req.params.id, {  
        include: [{ association : "cart"}]})
        .then(function(usuario){
            res.render('./users/usersDetail', {user})  
        })
        .catch(function(e){
            console.log(e)
        }) 
    },
    //login 
    login: (req, res) => {
        res.render("login")
    },
    //validalogin 
    loginProcess: (req, res) => {
        let userToLogin = Users.findByField("email", req.body.email)

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
    //cierra cesión
    logOut: (req, res) => {
        req.session.destroy();
        console.log(req.session)
        return res.redirect("/")
    },

    profile: (req, res) => {
        return res.render()
    },
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

        let userInDB = db.users.findByField("email", req.body.email);

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


        let userCreated = user.create(userToCreate);

        res.redirect("/user/login")
    },
     //creación
    userscreate : (req,res) => {
        db.Users,findAll ()
        .then (function(productos){
            return res.render ("/")
        })
        .catch(function(e) {
            console.log(e)
        })},
    //guarda user
 save: function (req,res){
     db.users.create({
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
module.exports = userscontroller;