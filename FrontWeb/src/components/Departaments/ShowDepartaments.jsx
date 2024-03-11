import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/departamentos/"

const CompShowDepartaments = () => {
  const [departaments, setDepartaments] = useState([]);


  useEffect(() => {
    getDepartaments();
  }, []);

  //Obtiene todos los departamentos
  const getDepartaments = async () => {
    const res = await axios.get(URI);
    setDepartaments(res.data);
  };


  //Eliminar Departamento 
  const deleteDepartament = async (IDDepartamento) => {
    try {
      const res = await axios.get(`${URI}${IDDepartamento}`);
      const departamento = res.data;
      Swal.fire({
        title: "Confirmar Eliminado?",
        html:
          "<i>Realmente desea eliminar a <strong>" +
          departamento.NombreDepartamento +
          "</strong></i>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${URI}${IDDepartamento}`);
          getDepartaments();
          Swal.fire({
            title: "Eliminado!",
            text: "" + departamento.NombreDepartamento + " fue eliminado.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  }

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <Link to="/createDepartament"
          className="btn mt-2 mb-2 btn-hover-gray"
          style={{color: "#8000ff"}}
          >
            Departamento{" "}
            <i className="fa-solid fa-plus" style={{ color: "#8000ff" }}></i>
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th>NOMBRE</th>
                  <th>ACTIVO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {departaments.map((departamento) => (
                  <tr key={departamento.IDDepartamento}>
                    <td>{departamento.NombreDepartamento}</td>
                    <td>{departamento.lActivo.toString() == "1" ? "Activo" : "Desactivado"}</td>
                    <td>
                      <Link to={`/editDepartamento/${departamento.IDDepartamento}`} className="btn btn-hover-gray" style={{ color: "blue" }}>
                        <i className="fa-solid fa-user-pen"></i>
                      </Link>
                      <button onClick={() => deleteDepartament(departamento.IDDepartamento)} className="btn btn-hover-gray" style={{ color: "red" }}>
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
};

export default CompShowDepartaments;


























