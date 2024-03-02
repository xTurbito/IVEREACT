import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Swal from "sweetalert2";

const URI =  'http://localhost:8000/productos/';

const CompEditProduct = () => {
    const [productData, setProductData] = useState({
        Nombre: '',
        Descripcion: '',
        Precio: '',
        Stock: '',
        lActivo : ''
    })
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {idProducto} = useParams();

    useEffect(() => {
        getProductId();
    },[idProducto]);


    const update = async(e) => {
        e.preventDefault();
        if(!productData.Nombre || !productData.Descripcion || !productData.Precio || !productData.Stock || !productData.lActivo){
            setError('Todos los campos son requeridos');
            return;
        }
        try {
            await axios.put(URI + idProducto,productData)
                navigate('/products');      
        }catch(error){
            console.error("Error a la hora de actualziar:", error);
        }
        Swal.fire({
            title: "<strong>Actualizacion Exitosa</strong>",
            html: "<i>El Producto <strong>"+productData.Nombre+"</strong> fue actualizado con exito</i>",
            icon: "sucess",
            timer:3000
          });
        
    };


    const getProductId = async () => {
        try {
            const res = await axios.get(URI + idProducto);
            setProductData(res.data);
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
                        value={productData.Nombre}
                        onChange={(e) => setProductData({...productData, Nombre: e.target.value})}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                        <input 
                        value={productData.Descripcion}
                        onChange={(e) => setProductData({...productData, Descripcion: e.target.value})}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input 
                        value={productData.Precio}
                        onChange={(e) => setProductData({...productData, Precio: e.target.value})}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Stock</label>
                        <input 
                        value={productData.Stock}
                        onChange={(e) => setProductData({...productData, Stock: e.target.value})}
                        type="text"
                        className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Estado</label>
                    <select
                    value={productData.lActivo}
                    onChange={(e) => setProductData({...productData, lActivo: e.target.value})}
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
