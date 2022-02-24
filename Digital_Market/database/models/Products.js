module.exports = function (sequelize, DataTypes){
    let alias = "Products"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
        {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
        */
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: DataTypes.STRING  
        },
        stock: {
            type: DataTypes.STRING  
        },
        categories_id: {
            type: DataTypes.INTEGER  
        },
        name: {
            type: DataTypes.INTEGER  
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let products = sequelize.define (alias, cols, config);

 

    products.associate = function (models) {
        products.belongsToMany(models.users, {
            as: "Users",
            through:"products_users",
            foreignKey: "products_id",
            otherKey: "users_id",
            timestamps: false
        })
    }

    return products;
}