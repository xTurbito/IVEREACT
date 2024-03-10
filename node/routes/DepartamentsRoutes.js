import express from "express";

import {createDepartament, deleteDepartament,getAllDepartaments,getDepartament,updateDepartament } from "../controllers/DepartamentsController.js";

const router = express.Router()

router.get('/', getAllDepartaments)
router.get('/:IDDepartamento',getDepartament)
router.post('/',createDepartament)
router.put('/:IDDepartamento',updateDepartament)
router.delete('/:IDDepartamento',deleteDepartament)


export default router