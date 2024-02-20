import ProductsModel from "../models/ProductsModel.js";

//Mostrar todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsModel.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Mostrar un registro
export const getProduct = async (req, res) => {
    try {
        const product = await ProductsModel.findAll({
            where: { idProducto: req.params.idProducto }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
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
        res.json({ message: error.message });
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
