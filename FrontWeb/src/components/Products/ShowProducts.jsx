import axios from 'axios'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";

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

    //Elimina un Producto
    const deleteProduct = async(idProducto) => {
      try {
        const res = await axios.get(`${URI}${idProducto}`);
        const producto = res.data;
        Swal.fire({
          title: "Confirmar Eliminado?",
          html:
            "<i>Realmente desea eliminar a <strong>" +
            producto.Nombre +
            "</strong></i>",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminarlo",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axios.delete(`${URI}${idProducto}`);
            getProducts();
            Swal.fire({
              title: "Eliminado!",
              text: "" + producto.Nombre + " fue eliminado.",
              icon: "success",
            });
          }
        });
      }catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    }
   

    return (
        <div className='container mt-3'>
          <div className='card'>
            <div className='card-header'>
            <Link to="/createProduct" className="btn mt-2 mb-2 btn-hover-gray"
            style={{ color: "#8000ff" }}>
            Producto{" "}
            <i className="fa-solid fa-plus" style={{ color: "#8000ff" }}></i>
            </Link>
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
                        <Link to={`/editProducto/${productos.idProducto}`} 
                        className="btn btn-hover-gray "
                        style={{ color: "blue" }}
                        >
                         <i className="fa-solid fa-user-pen"></i>
                        </Link>
                        <button
                        onClick={() => deleteProduct(productos.idProducto)}
                        className="btn btn-hover-gray"
                        style={{ color: "red" }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
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