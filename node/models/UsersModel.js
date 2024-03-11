import db from "../database/db.js";
import { DataTypes } from "sequelize";
import TipoUsuarioModel from "./TipoUsuarioModel.js";

const UsersModel = db.define('usuario',{
    idUsuario: { type: DataTypes.BIGINT, primaryKey: true },
    usuario: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    tipo_usuclave: { type: DataTypes.BIGINT }, 
    lactivo: { type: DataTypes.BIGINT }
});

// Definir la relación con el modelo de tipo de usuario
UsersModel.belongsTo(TipoUsuarioModel, { foreignKey: 'tipo_usuclave', as: 'tipoUsuario' });

export default UsersModel;
