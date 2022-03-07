 module.exports = function (sequelize, DataTypes){
    let alias = "Cart_Products"

     let cols = {
        
        
         id: {
             type: DataTypes.INTEGER,
           primaryKey: true,
             autoIncrement: true
         },
         products_id: {
             type: DataTypes.STRING  
         },
         cart_id: {
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
             otherKey: "cart_id",
             timestamps: false
        })
     }

     return Cart_Products;
 }