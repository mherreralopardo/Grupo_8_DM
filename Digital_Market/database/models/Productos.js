module.exports = function (sequelize, DataTypes){
    let alias = "Productos"

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
        categorias_id: {
            type: DataTypes.INTEGER  
        },
        name: {
            type: DataTypes.INTEGER  
        }
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    let Productos = sequelize.define (alias, cols, config);

    Productos.associate = function (models) {
        Productos.hasMany(models.CategoriaProductos, {
            as: "CategoriaProductos",
            foreignKey: "CategoriaProductos_id",
            timestamps: false
        })
    }

    return Productos;
}