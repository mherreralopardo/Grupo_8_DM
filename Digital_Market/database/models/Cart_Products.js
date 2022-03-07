 module.exports = function (sequelize, DataTypes){
    let alias = "cart_products"

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
         tableName: "cart_products",
         timestamps: false
     }

   let cart_Products = sequelize.define (alias, cols, config);

     cart_Products.associate = function (models) {
         cart_Products.hasMany(models.cart, {
            as: "Cart",
             foreignKey: "products_id",
             otherKey: "cart_id",
             timestamps: false
        })
     }

     return cart_products;
 }

