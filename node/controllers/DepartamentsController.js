import DepartamentsModel from "../models/DepartamentsModel.js";


//Mostrar todos los registros
export const getAllDepartaments = async (req,res) => {
    try{
        const departaments = await DepartamentsModel.findAll();
        res.json(departaments);
    }catch(error){
        res.json({message: error.message})
    }
};


//Mostrar un registro
export const getDepartament = async(req,res) => {
    try{
        const departament = await DepartamentsModel.findAll({
            where: {IDDepartamento: req.params.IDDepartamento}
        });
        if(departament.length > 0){
            res.json(departament[0]);
        }else {
            res.status(404).json({message: "Departamento no encontrado"});
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


//Crear un Departamento
export const createDepartament = async(req, res) => {
    try {
        await DepartamentsModel.create(req.body);
        res.json({
            "message": "Departamento creado correctamente"
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Actualizar un Departamento
export const updateDepartament = async(req,res) => {
    try {
       await DepartamentsModel.update(req.body, {
        where: {IDDepartamento: req.params.IDDepartamento}
       });
       res.json({
        "message": "Departamento actualizado correctamente"
       });
    } catch (error) {
        res.json({message: error.message});
    }
}

//Eliminar
export const deleteDepartament = async(req,res) => {
    try {
        await DepartamentsModel.destroy({
            where: {
                IDDepartamento: req.params.IDDepartamento
            }
        });
        res.json({
            "message": "Departamento eliminado correctamente"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}