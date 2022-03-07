 module.exports = function (sequelize, DataTypes){
    let alias = "Categories_Products"

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
         tableName: "categoria_producto",
         timestamps: false
     }

     let Categories_Products= sequelize.define (alias, cols, config);

     Categories_Products.associate = function (models) {
         Categories_Products.hasMany(models.Categories, {
             as: "Categories",
             foreignKey: "products_id",
             timestamps: false
         })
     }

     return Categories_Products;
 }