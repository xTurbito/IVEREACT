import db from "../database/db.js"
import { DataTypes } from "sequelize"

const TipoUsuarioModel = db.define('tipo_usuarios',{
    idtipo:{type:DataTypes.BIGINT, primaryKey: true},
    nombre:{type:DataTypes.STRING}
})

export default TipoUsuarioModel;