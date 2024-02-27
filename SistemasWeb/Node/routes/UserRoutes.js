//Importamos express
import express from "express";
//Importacion de metodos
import { createUser, deleteuser,getAllUsers,getUser,updateUser } from "../controllers/UsersController.js";

const router = express.Router()

router.get('/',getAllUsers)
router.get('/:idUsuario',getUser)
router.post('/',createUser)
router.put('/:idUsuario', updateUser)
router.delete('/:idUsuario',deleteuser)

export default router