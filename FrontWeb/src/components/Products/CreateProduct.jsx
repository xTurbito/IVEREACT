import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import convertBase64 from "../ImageBase64/ConvertBase64"; 

const URI = "http://localhost:8000/productos/";

const CompCreateProduct = () => {
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Stock, setStock] = useState("");
  const [precio_cost, setPrecioCost] = useState("");
  const [fotoproducto, setFotoProducto] = useState("");
  const [lActivo, setActivo] = useState("");
 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const data = new FileReader();
    data.addEventListener("load", () => {
      setFotoProducto(data.result); 
    });
    data.readAsDataURL(file);
  };

  const bdProducto = async (e) => {
    e.preventDefault();


    // Redimensionar la imagen antes de enviarla
    const resizedImage = await convertBase64(fotoproducto);
    await axios.post(URI, {
      Nombre,
      Descripcion,
      Precio,
      Stock,
      precio_cost,
      fotoproducto: resizedImage, // Usar la imagen redimensionada
      lActivo,
    });
    navigate("/Products");
    Swal.fire({
      title: "<strong>Registro Exitoso</strong>",
      html:
        "<i>El Producto <strong>" +
        Nombre +
        "</strong> fue registrado con exito</i>",
      icon: "success",
      timer: 3000,
    });
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h3 className="d-flex justify-content-center">Nuevo Producto</h3>
        </div>
        <div className="card-body">
          <form onSubmit={bdProducto}>
            <div className="mb-3">
              <label className="form-label">Producto</label>
              <input
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                required
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
              <label className="form-label">Precio Costo</label>
              <input
                value={precio_cost}
                onChange={(e) => setPrecioCost(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio Venta</label>
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
            <div className="mb-3">
              <label className="form-label">Foto</label>
              <br />
              <input
                type="file"
                onChange={handleChange} // Usar handleChange directamente aquí
                className="form-control"
              />
              <br />
              {fotoproducto && <img src={fotoproducto} width="300px" height="300px" />}
            </div>

            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompCreateProduct;
