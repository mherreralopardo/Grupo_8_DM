const {ValidationResult, validationResult} = require ("express-validator")
const bcryptjs = require ("bcryptjs");
const User = require ("../models/User");

const controller = {
    register: (req, res) => {
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
        return res.render (/* Vista de Login */)
    }
}