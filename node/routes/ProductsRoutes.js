import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct, getProductsByDepartment } from "../controllers/ProductsController.js";


const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', getAllProducts);

// Ruta para obtener un producto por su ID
router.get('/:idProducto', getProduct);

// Ruta para crear un nuevo producto
router.post('/', createProduct);

// Ruta para actualizar un producto por su ID
router.put('/:idProducto', updateProduct);

// Ruta para eliminar un producto por su ID
router.delete('/:idProducto', deleteProduct);

// Nueva ruta para obtener todos los productos de un departamento específico
router.get('/:IDDepartamento/productos', getProductsByDepartment);

export default router;
