module.exports = function (sequelize, DataTypes){
    let alias = "producto_cliente"

        let cols = {
            /* AJUSTAR NOMBRE DE COLUMNAS
            
            {"id":16,"name":"Televisor Samsung-50 pulgadas","description"","price":4632,"discount":17,"category":"Televisores","image":"Sensei-32p.jpg","type":"Nuevo","color":"Negro"},
            */
        
        producto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }}

        let config = {
            tableName: "producto_cliente",
            timestamps: false
        }
    
        let producto_cliente = sequelize.define (alias, cols, config);
    
        producto_cliente.associate = function (models) {
            producto_cliente.hasMany(models.Clientes, {
                as: "producto_cliente",
                foreignKey: "id",
                timestamps: false
            })
        }
    
    return producto_cliente;
}