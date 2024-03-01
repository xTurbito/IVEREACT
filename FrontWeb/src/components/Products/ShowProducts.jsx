import axios from 'axios'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { DeleteButton, EditButton } from '../Buttons/TableButtons';

const URI = 'http://localhost:8000/productos/';

const CompShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]) ;

    //Obtener todos los Productos
    const getProducts = async () => {
        const res = await axios.get(URI);
        setProducts(res.data);
    };

    return (
        <div className='container mt-3'>
          <div className='card'>
            <div className='card-header'>
            <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user"></i><i className="fa-solid fa-plus"></i></Link>
            </div>
            <div className='card-body'>
            <div className='table-responsive-sm'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>PRECIO</th>
                    <th>STOCK</th>
                    <th>ACTIVO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((productos) => (
                    <tr key={productos.idProducto}>
                      <td>{productos.Nombre}</td>
                      <td>{productos.Descripcion}</td>
                      <td>{productos.Precio}</td>
                      <td>{productos.Stock}</td>
                      <td>{productos.lActivo.toString() === '1' ? 'Activo' : 'Desactivado'}</td>
                      <td>
                        <Link to={`/editProducto/${productos.idProducto}`} >
                          
                          <EditButton/>
                        </Link>
                        <DeleteButton/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
            </div>
          </div>
        
      );
}

export default CompShowProducts;