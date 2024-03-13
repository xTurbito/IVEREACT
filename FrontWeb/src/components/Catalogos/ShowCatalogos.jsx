import axios from "axios";
import { useState, useEffect } from "react";

const DepartamentosURI = "http://localhost:8000/departamentos/";
const ProductosURI = "http://localhost:8000/productos/";

const CompShowCatalogos = () => {
  const [catalogo, setCatalogo] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [departmentId, setDepartmentId] = useState(""); // Definir el estado del ID del departamento

  useEffect(() => {
    const getAllDepartments = async () => {
      try {
        const res = await axios.get(DepartamentosURI);
        setDepartamentos(res.data);
      } catch (error) {
        console.error("Error al obtener los departamentos:", error);
      }
    };

    getAllDepartments(); // Llamar a esta función primero para obtener los departamentos
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  const getProductsByDepartment = async () => {
    try {
      if (departmentId !== "") {
        const res = await axios.get(`${ProductosURI}${departmentId}/productos`);
        setCatalogo(res.data);
        exportToPdf(res.data); // Llamar a la función de exportación después de obtener los productos
      }
    } catch (error) {
      console.error("Error al obtener los productos relacionados por el IDDepartamento:", error);
    }
  };

  const exportToPdf = async (productos) => {
    try {
      const response = await axios.post('http://localhost/FPDF/index.php', {
        productos: productos
      });
      console.log(response.data); // Puedes manejar la respuesta del servidor si es necesario
    } catch (error) {
      console.error('Error al enviar los productos al archivo PHP:', error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h3 className="d-flex justify-content-center">Reporte Productos</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive-sm">
            <div>
              <label className="form-label">Departamento</label>
              <select className="form-select" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
                <option value="">Seleccionar departamento</option>
                {departamentos.map((departamento) => (
                  <option key={departamento.IDDepartamento} value={departamento.IDDepartamento}>{departamento.NombreDepartamento}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={getProductsByDepartment}>Exportar a PDF</button>
        </div>
      </div>
    </div>
  );
};

export default CompShowCatalogos;
