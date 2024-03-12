//Conexion a base de datos
import db from "../database/db.js"
//Importacion sequelize
import { DataTypes } from "sequelize";
import DepartamentsModels from "./DepartamentsModel.js";

//Parametros de los Productos
const ProductsModel = db.define('productos',{
    idProducto:{type: DataTypes.BIGINT, primaryKey: true},
    Nombre:{type: DataTypes.STRING},
    Descripcion:{type: DataTypes.STRING},
    Precio:{type: DataTypes.DECIMAL},
    Stock:{type:DataTypes.BIGINT},
    precio_cost:{type: DataTypes.DECIMAL},
    fotoproducto: {type: DataTypes.STRING},
    lActivo:{type:DataTypes.INTEGER},
    IDDepartamento: {type: DataTypes.INTEGER}
})

ProductsModel.belongsTo(DepartamentsModels,{foreignKey: 'IDDepartamento', as: 'departamento'})

export default ProductsModel 