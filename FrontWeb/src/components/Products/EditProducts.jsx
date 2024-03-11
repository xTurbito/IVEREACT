import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import convertBase64 from "../ImageBase64/ConvertBase64";

const URI = "http://localhost:8000/productos/";

const CompEditProduct = () => {
  const [productData, setProductData] = useState({
    Nombre: "",
    Descripcion: "",
    Precio: "",
    Stock: "",
    lActivo: "",
    fotoproducto: "",
    precio_cost: "",
    
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { idProducto } = useParams();

  useEffect(() => {
    getProductId();
  }, [idProducto]);

  const update = async (e) => {
    e.preventDefault();
    if (
      !productData.Nombre ||
      !productData.Descripcion ||
      !productData.Precio ||
      !productData.Stock ||
      !productData.precio_cost ||
      !productData.fotoproducto ||
      !productData.lActivo
    ) {
      setError("Todos los campos son requeridos");
      return;
    }
    try {
      // Redimensionar la imagen antes de enviarla al servidor
      const resizedImage = await convertBase64(productData.fotoproducto);

      // Agregar la imagen redimensionada en formato base64 a los datos del producto
      const updatedProductData = {
        ...productData,
        fotoproducto: resizedImage,
      };

      await axios.put(URI + idProducto, updatedProductData);
      navigate("/products");

      Swal.fire({
        title: "<strong>Actualizacion Exitosa</strong>",
        html:
          "<i>El Producto <strong>" +
          productData.Nombre +
          "</strong> fue actualizado con exito</i>",
        icon: "success",
        timer: 3000,
      });
    } catch (error) {
      console.error("Error a la hora de actualizar:", error);
    }
  };

  const getProductId = async () => {
    try {
      const res = await axios.get(URI + idProducto);
      setProductData({
        ...res.data,
        fotoproducto: res.data.fotoproducto,
      });
    } catch (error) {
      console.error("Error fetching product by ID:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProductData({ ...productData, fotoproducto: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  
  return (
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
                onChange={(e) =>
                  setProductData({ ...productData, Nombre: e.target.value })
                }
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input
                value={productData.Descripcion}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    Descripcion: e.target.value,
                  })
                }
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio Costo</label>
              <input
                value={productData.precio_cost}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    precio_cost: e.target.value,
                  })
                }
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio Venta</label>
              <input
                value={productData.Precio}
                onChange={(e) =>
                  setProductData({ ...productData, Precio: e.target.value })
                }
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                value={productData.Stock}
                onChange={(e) => {
                  const stockValue = e.target.value.trim();
                  const stock = stockValue === "" ? 0 : parseInt(stockValue);
                  setProductData({ ...productData, Stock: stock });
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                value={productData.lActivo}
                onChange={(e) =>
                  setProductData({ ...productData, lActivo: e.target.value })
                }
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
                onChange={handleImageChange}
                className="form-control"
              />
              <br />
              <img
                src={productData.fotoproducto}
                alt="Product"
                width="300px"
                height="300px"
              />
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

export default CompEditProduct;
