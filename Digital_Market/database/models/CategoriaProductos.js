module.exports = function (sequelize, DataTypes){
    let alias = "CategoriaProductos"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
        {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
        */
        
        productos_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categorias: {
            type: DataTypes.STRING  
        },
    }

    let config = {
        tableName: "categoria_producto",
        timestamps: false
    }

    let CategoriaProductos = sequelize.define (alias, cols, config);

    CategoriaProductos.associate = function (models) {
        CategoriaProductos.hasMany(models.Categoria, {
            as: "Categoria",
            foreignKey: "categoria_id",
            timestamps: false
        })
    }

    return CategoriaProductos;
}