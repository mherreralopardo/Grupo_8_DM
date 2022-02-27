
const path = require('path');
const db = require("../../database/models");

//Aqui tienen otra forma de llamar a cada uno de los modelos

const UserAPIController = {
    list: (req, res) => {
        db.User.findAll({
            include: [{association: "UserCat"}]})
        .then(users => {           let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: '/data/user'
                },
                data: users.map(user=>{
                    return {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        userCategory: user.UserCat.name,
                        avatar: user.avatar
                    }
                })
            }
                res.json(respuesta);
            })

            .catch(error => console.log(error))
    },
    
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/data/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            })
            .catch(error => console.log(error))
    }
    
}

module.exports = UserAPIController;