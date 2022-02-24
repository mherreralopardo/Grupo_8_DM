module.exports = function (sequelize, DataTypes){
    let alias = "Cart_Products"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
        {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
        */
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productos_id: {
            type: DataTypes.STRING  
        },
        compras_id: {
            type: DataTypes.STRING  
        }
    }

    let config = {
        tableName: "Cart_Products",
        timestamps: false
    }

    let Cart_Products = sequelize.define (alias, cols, config);

    Cart_Products.associate = function (models) {
        Cart_Products.hasMany(models.Cart, {
            as: "Cart",
            foreignKey: "products_id",
            timestamps: false
        })
    }

    return Cart_Products;
}