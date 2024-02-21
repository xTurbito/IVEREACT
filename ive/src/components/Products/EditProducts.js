import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from "react-router-dom";

const URI =  'http://localhost:8000/productos/';

const CompEditProduct = () => {
    const [Nombre,setNombre] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [Precio,setPrecio]  = useState('');
    const [Stock, setStock]  = useState('');
    const [lActivo, setActivo] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {idProducto} = useParams();

    const update = async(e) => {
        e.preventDefault();
        if(!Nombre || !Descripcion || !Precio || !Stock || !!lActivo){
            setError('Todos los campos son requeridos');
            return;
        }
        try {
            await axios.put(URI + idProducto,{
                Nombre: Nombre,
                Descripcion: Descripcion,
                Stock: Stock,
                lActivo : lActivo
            });
            navigate('/products')
        }catch(error){
            console.error("Error a la hora de actualziar:", error);
        }
    };


    useEffect(() => {
        getProductId();
    },[idProducto]);


    const initializeValues = (data) => {
        setNombre(data.Nombre || '');
        setDescripcion(data.Descripcion || '');
        setStock(data.Stock || '');
        setPrecio(data.Precio || '');
        setActivo(data.lactivo || '');
    };

    const getProductId = async () => {
        try {
            const res = await axios.get(URI + idProducto);
            initializeValues(res.data);
        }catch(error){
            console.error("Error fetching blog by ID:", error);
        }
    }

    return(
        <div className="container mt-3">
          <div className="card">
            <div className="card-header">
                <h3 className="d-flex justify-content-center">Datos del Producto</h3>
            </div>
            <div className="card-body">
            <form onSubmit={update}> 
            <div className="mb-3">
                        <label className="form-label">Producto</label>
                        <input 
                        value={Nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                        <input 
                        value={Descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input 
                        value={Precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Stock</label>
                        <input 
                        value={Stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Estado</label>
                    <select
                    value={lActivo}
                    onChange={(e) => setActivo(e.target.value)}
                    className="form-select"
                    >
                        <option value={"1"}>Activo</option>
                        <option value={"0"}>Desactivado</option>
                    </select>
                    </div>
                    <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
            </div>
            </div>  
         </div>
    );
}

export default CompEditProduct;