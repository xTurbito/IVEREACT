//CONEXION A LA BASE DE DATOS USANDO SEQUELIZE
import {Sequelize} from "sequelize";

//Parametros DB
const db = new Sequelize('ive','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

//Exportacion de conexion
export default db;

