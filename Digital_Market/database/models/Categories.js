module.exports = function (sequelize, DataTypes){
    let alias = "categories"

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
        }
       
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }

    let categories = sequelize.define (alias, cols, config);

    categories.associate = function (models) {
        categories.hasMany(models.categories_products, {
            as: "Categories_products",
            foreignKey: "products_id",
            timestamps: false
        })
    }

    return categories;
}