import ProductsModel from "../models/ProductsModel.js";
import DepartamentsModels from "../models/DepartamentsModel.js";

//Mostrar todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsModel.findAll({
            include: {
                model: DepartamentsModels,
                as: 'departamento'
            }
        });
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Mostrar un registro
export const getProduct = async (req, res) => {
    try {
        const product = await ProductsModel.findAll({
            where: { idProducto: req.params.idProducto }, // Filtrar productos por idProducto
            include: {
                model: DepartamentsModels,
                as: 'departamento'
            }
        });

        if (product.length > 0) {
            res.json(product[0]);
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Crear un Producto
export const createProduct = async (req, res) => {
    try {
        await ProductsModel.create(req.body);
        res.json({
            "message": "Producto creado correctamente"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        await ProductsModel.update(req.body, {
            where: { idProducto: req.params.idProducto }
        });
        res.json({
            "message": "Producto actualizado correctamente"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Eliminar un registro
export const deleteProduct = async (req, res) => {
    try {
        await ProductsModel.destroy({
            where: {
                idProducto: req.params.idProducto
            }
        });
        res.json({
            "message": "Producto eliminado correctamente"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const getProductsByDepartment = async (req, res) => {
    try {
        const departmentId = req.params.IDDepartamento;

        const products = await ProductsModel.findAll({
            where: { IDDepartamento: departmentId },
            include: {
                model: DepartamentsModels,
                as: 'departamento',
                where: { IDDepartamento: departmentId }
            }
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}