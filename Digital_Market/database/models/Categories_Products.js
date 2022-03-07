module.exports = function (sequelize, DataTypes){
    let alias = "categories_products"

     let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
//         {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
//         */
         id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },         
         products_id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         categories: {
             type: DataTypes.STRING  
                     },
     }

     let config = {
         tableName: "categories_products",
         timestamps: false
     }

     let categories_products= sequelize.define (alias, cols, config);

     categories_products.associate = function (models) {
        categories_products.hasMany(models.Categories, {
             as: "categories",
             foreignKey: "products_id",
             timestamps: false
         })
     }

     return categories_products;
 }

