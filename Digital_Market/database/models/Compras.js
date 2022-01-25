module.exports = function (sequelize, DataTypes){
    let alias = "Compras"

    let cols = {
        /* AJUSTAR NOMBRE DE COLUMNAS
        
        {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
        */
        
        productos_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        clientes_id: {
            type: DataTypes.STRING  
        },
        direccion_envio: {
            type: DataTypes.STRING  
        },
        email_compra: {
            type: DataTypes.STRING  
        },
        fecha_compra: {
            type: DataTypes.STRING  
        },
        status_compra: {
            type: DataTypes.STRING  
        },
    }

    let config = {
        tableName: "compras",
        timestamps: false
    }

    let Compras = sequelize.define (alias, cols, config);

    Compras.associate = function (models) {
        Compras.hasMany(models.Clientes, {
            as: "Clientes",
            foreignKey: "clientes_id",
            timestamps: false
        })
    }

    return Compras;
}