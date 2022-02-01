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
        tableName: "compras_productos",
        timestamps: false
    }

    let CompraProductos = sequelize.define (alias, cols, config);

    CompraProductos.associate = function (models) {
        CompraProductos.hasMany(models.Compras, {
            as: "Compras",
            foreignKey: "productos_id",
            timestamps: false
        })
    }

    return CompraProductos;
}