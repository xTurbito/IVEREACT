import express from "express";
import cors from 'cors';

//Importacion de conexion a db
import db from "./database/db.js"
//Importacion de enrutado
import UserRoutes from './routes/UserRoutes.js'
import ProductsRoutes from './routes/ProductsRoutes.js'
import DepartamentsRoutes from './routes/DepartamentsRoutes.js'



const app = express()
app.use(cors())
app.use(express.json())
app.use('/Usuarios', UserRoutes)
app.use('/Productos',ProductsRoutes)
app.use('/Departamentos', DepartamentsRoutes)


try {
    await db.authenticate()
    console.log("Conexion exitosa a la base de datos")
 } catch (error) {
     console.log(`El error de conexión es: ${error}`);
 }
 

 app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})