module.exports = function (sequelize, DataTypes){
    let alias = "Categories"

        let cols = {
            /* AJUSTAR NOMBRE DE COLUMNAS
            
            {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
            */
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING  
        },
        products_id: {
            type: DataTypes.STRING  
        },
        color: {
            type: DataTypes.STRING  
        },
        marca: {
            type: DataTypes.STRING  
        },
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }

    let Categories = sequelize.define (alias, cols, config);

    Categories.associate = function (models) {
        Categories.hasMany(models.CategoriesProducts, {
            as: "Categories_products",
            foreignKey: "products_id",
            timestamps: false
        })
    }

    return Categories;
}