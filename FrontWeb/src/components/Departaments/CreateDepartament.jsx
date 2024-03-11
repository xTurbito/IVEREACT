import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/departamentos/";

const CompCreateDepartament = () => {
  const [NombreDepartamento, setNombreDepartamento] = useState("");
  const [lActivo, setActivo] = useState("");
  const navigate = useNavigate();
  const bdDepartamento = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      NombreDepartamento,
      lActivo,
    });
    navigate("/Departaments");
    Swal.fire({
      title: "<strong>Registro Exitoso</strong>",
      html:
        "<i>El departamento <strong>" +
        nombre +
        "</strong> fue registrado con exito</i>",
      icon: "sucess",
      timer: 3000,
    });
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h3 className="d-flex justify-content-center">Nuevo Departamento</h3>
        </div>
        <div className="card-body">
          <form onSubmit={bdDepartamento}>
            <div className="mb-3">
              <label className="form-label">Nombre del Departamento</label>
              <input
                value={NombreDepartamento}
                onChange={(e) => setNombreDepartamento(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Activo</label>
              <select
                value={lActivo}
                onChange={(e) => setActivo(e.target.value)}
                className="form-select"
                required 
              >
                <option value="">Selecciona un estado</option>
                <option value="1">Activo</option>
                <option value="0">Desactivado</option>
              </select>
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

export default CompCreateDepartament;
