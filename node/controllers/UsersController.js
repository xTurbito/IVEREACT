//Importamos el model 
import UsersModel from "../models/UsersModel.js";

//Metodos para el CRUD 

//Mostrar todos los registros
export const getAllUsers = async(req,res)=> {
    try {
        const users = await UsersModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getUser = async (req,res) => {
    try {
        const user= await UsersModel.findAll({
            where: {idUsuario: req.params.idUsuario}
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message})
    }
}


//Crear un registro
export const createUser = async (req, res ) => {
    try {
        await UsersModel.create(req.body)
        res.json({
            "message": "Usuario creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un registro
export const updateUser = async(req, res) => {
    try {
        await UsersModel.update(req.body,{
            where: {idUsuario: req.params.idUsuario}
        })
        res.json({
            "message" : "Usuario actualizado correctamente"
        })
    }catch(error ){
        res.json({message: error.message})
    }
}


//Eleminiar un registro
export const deleteuser = async (req, res) => {
    try {
        await UsersModel.destroy({
            where: {idUsuario: req.params.idUsuario}
        })
        res.json({
            "message" : "Usuario eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}