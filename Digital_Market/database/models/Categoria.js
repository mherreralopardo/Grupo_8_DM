module.exports = function (sequelize, DataTypes){
    let alias = "Categoria"

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
        color: {
            type: DataTypes.STRING  
        },
        marca: {
            type: DataTypes.STRING  
        },
    }

    let config = {
        tableName: "categoria",
        timestamps: false
    }

    let Categoria = sequelize.define (alias, cols, config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.CategoriaProductos, {
            as: "Categoria_productos",
            foreignKey: "categoria_id",
            timestamps: false
        })
    }

    return Categoria;
}