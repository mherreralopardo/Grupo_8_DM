module.exports = function (sequelize, DataTypes){
    let alias = "Clientes"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNA
        */
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING  
        },
        country: {
            type: DataTypes.STRING  
        },
        telefono: {
            type: DataTypes.INTEGER  
        },
        email: {
            type: DataTypes.STRING  
        },
        adress: {
            type: DataTypes.STRING  
        }
        
    }

    let config = {
        tableName: "Clientes",
        timestamps: false
    }

    let Clientes = sequelize.define (alias, cols, config);

    Clientes.associate = function (models) {
        Clientes.belongsToMany(models.Productos, {
            as: "productos",
            through:"producto_cliente",
            foreignKey: "id",
            otherKey: "id",
            timestamps: false
        });
    }


    return Clientes;
}