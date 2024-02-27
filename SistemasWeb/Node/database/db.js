import {Sequelize} from "sequelize";

const db = new Sequelize('ive','root','',{
    host:'localhost',
    dialect: 'mysql'
})

export default db;