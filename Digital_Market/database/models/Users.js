module.exports = function (sequelize, DataTypes){
    let alias = "users"

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
        tableName: "users",
        timestamps: false
    }

    let users = sequelize.define (alias, cols, config);

    users.associate = function (models) {
        users.belongsToMany(models.products, {
            as: "products",
            through:"products_users",
            timestamps: false
        });
    }


    return users;
}