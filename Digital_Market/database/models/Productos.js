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
        name: {
            type: DataTypes.STRING  
        },
        description: {
            type: DataTypes.STRING  
        },
        price: {
            type: DataTypes.INTEGER  
        },
        discount: {
            type: DataTypes.INTEGER  
        },
        category: {
            type: DataTypes.STRING  
        },
        image: {
            type: DataTypes.FILE  
        },
        type: {
            type: DataTypes.STRING  
        },
        color: {
            type: DataTypes.STRING  
        }
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    let Productos = sequelize.define (alias, cols, config);

    Productos.associate = function (models) {
        Productos.belongsToMany(models.Usuarios, {
            as: "Usuarios",
            through:"",
            foreignKey: "productos_id",
            otherKey: "usuario_id",
            timestamps: false
        })
    }

    return Productos;
}