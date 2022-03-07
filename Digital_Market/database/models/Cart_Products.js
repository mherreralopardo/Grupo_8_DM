module.exports = function (sequelize, DataTypes){
    let alias = "cart_products"

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
    }

    let config = {
        tableName: "cart_products",
        timestamps: false
    }

    let cart_products = sequelize.define (alias, cols, config);

    cart_products.associate = function (models) {
        cart_products.hasMany(models.Cart, {
            as: "Cart",
            foreignKey: "products_id",
            timestamps: false
        })
    }

    return cart_products;
}