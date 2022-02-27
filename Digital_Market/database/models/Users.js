module.exports = function (sequelize, DataTypes){
    let alias = "Users"

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
        tableName: "Users",
        timestamps: false
    }

    let Users = sequelize.define (alias, cols, config);

    Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through:"products_users",
            foreignKey: "id",
            otherKey: "id",
            timestamps: false
        });
    }


    return Users;
}