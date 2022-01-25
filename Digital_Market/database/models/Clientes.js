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
        tableName: "cliente",
        timestamps: false
    }

    let Clientes = sequelize.define (alias, cols, config);

    Clientes.associate = function (models) {
        Clientes.belongsToMany(models.Productos, {
            as: "productos",
            through:"",
            foreignKey: "cliente_id",
            otherKey: "producto_id",
            timestamps: false
        });
    }


    return Clientes;
}