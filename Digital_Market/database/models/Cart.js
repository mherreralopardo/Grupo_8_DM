const Categories = require("./Categories");

module.exports = function (sequelize, DataTypes){
    let alias = "Cart"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
        {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
        */
        
        products_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        fecha_cart: {
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

    let Cart = sequelize.define (alias, cols, config);

    Cart.associate = function (models) {
        Cart.hasMany(models.Users, {
            as: "Users",
            foreignKey: "id",
            timestamps: false
        })
    }

    return Cart;
}