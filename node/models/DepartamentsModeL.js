import db from "../database/db.js"

import { DataTypes } from "sequelize";

const DepartamentsModels = db.define('departamentos',{
    IDDepartamento:{type: DataTypes.BIGINT, primaryKey: true},
    NombreDepartamento: {type: DataTypes.STRING},
    lActivo:{type:DataTypes.INTEGER}
})

export default DepartamentsModels;