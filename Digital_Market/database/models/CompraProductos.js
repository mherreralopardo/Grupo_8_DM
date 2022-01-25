module.exports = function (sequelize, DataTypes){
    let alias = "CompraProductos"

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
        tableName: "productos",
        timestamps: false
    }

    let Productos = sequelize.define (alias, cols, config);

    Productos.associate = function (models) {
        Productos.belongsTo(models.Usuarios, {
            as: "Usuarios",
            foreignKey: "productos_id",
            timestamps: false
        })
    }

    return Productos;
}