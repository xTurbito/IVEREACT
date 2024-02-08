//Importacion de la conexio a la base de datos
import db from "../database/db.js"
//Importacion sequelize
import { DataTypes } from "sequelize";

//Parametros de la tabla usuarios.
//Por defecto sequelize asume que hay un campo id, para evitar eso poner primarykey: true
const UsuarioModel = db.define('usuarios',{
    idUsuario:{type: DataTypes.BIGINT, primaryKey: true},
    usuario:{type: DataTypes.STRING},
    password:{type: DataTypes.STRING},
    nombre:{type: DataTypes.STRING },
    tipo_usuclave:{type: DataTypes.BIGINT},
})

//Exportacion de mdelo
export default UsuarioModel