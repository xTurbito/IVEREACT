//Conexion a base de datos
import db from "../database/db.js"
//Importacion sequelize
import { DataTypes } from "sequelize";

//Parametros de los Productos
const ProductsModel = db.define('productos',{
    idProducto:{type: DataTypes.BIGINT, primaryKey: true},
    Nombre:{type: DataTypes.STRING},
    Descripcion:{type: DataTypes.STRING},
    Precio:{type: DataTypes.DECIMAL},
    Stock:{type:DataTypes.BIGINT},
    precio_cost:{type: DataTypes.DECIMAL},
    lActivo:{type:DataTypes.INTEGER}
})

export default ProductsModel 