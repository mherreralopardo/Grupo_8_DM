module.exports = function (sequelize, DataTypes){
    let alias = "Usuarios"

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
        nickName: {
            type: DataTypes.STRING  
        },
        phoneNumber: {
            type: DataTypes.INTEGER  
        },
        email: {
            type: DataTypes.STRING  
        },
        password: {
            type: DataTypes.STRING  
        }
        
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuarios = sequelize.define (alias, cols, config);

    Usuarios.associate = function (models) {
        Usuarios.belongsToMany(models.Productos, {
            as: "productos",
            through:"",
            foreignKey: "usuarios_id",
            otherKey: "producto_id",
            timestamps: false
        });
    }

    return Usuarios;
}