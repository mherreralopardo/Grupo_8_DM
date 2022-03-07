const categories = require("./categories");

module.exports = function (sequelize, DataTypes){
    let alias = "cart"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
        {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
        */
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        products_id: {
            type: DataTypes.STRING  
        },
        users_id: {
            type: DataTypes.STRING  
        },
        adress: {
            type: DataTypes.STRING  
        },
        email_cart: {
            type: DataTypes.STRING  
        },
        date_cart: {
            type: DataTypes.STRING  
        },
        status_cart: {
            type: DataTypes.STRING  
        },
    }

    let config = {
        tableName: "cart",
        timestamps: false
    }

    let cart = sequelize.define (alias, cols, config);

    cart.associate = function (models) {
        cart.hasMany(models.Users, {
            as: "users",
            foreignKey: "id",
            timestamps: false
        })
    }

    return cart;
}