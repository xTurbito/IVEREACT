import DepartamentsModels from "../models/DepartamentsModeL";


//Mostrar todos los registros
export const getAllDepartaments = async (req,res) => {
    try{
        const departaments = await DepartamentsModels.findAll();
        res.json(departaments);
    }catch(error){
        res.json({message: error.message})
    }
};


//Mostrar un registro
export const getDepartaments = async(res,res) => {
    try{
        const departament = await DepartamentsModels.findAll({
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