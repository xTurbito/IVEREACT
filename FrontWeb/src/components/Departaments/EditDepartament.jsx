import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/departamentos/";

const CompEditDepartament = () => {
  const [departamentData, setDepartamentData] = useState({
    NombreDepartamento: "",
    lActivo: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { IDDepartamento } = useParams();

  useEffect(() => {
    getDepartamentID();
  }, [IDDepartamento]);

  const update = async (e) => {
    e.preventDefault();
    if (!departamentData.NombreDepartamento || !departamentData.lActivo) {
      setError("Todos los campos son requeridos");
      return;
    }
    try {
      await axios.put(URI + IDDepartamento, departamentData);
      navigate("/departaments");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
    Swal.fire({
      title: "<strong>Actualizacion Exitosa</strong>",
      html:
        "<i>El Departamento <strong>" +
        departamentData.NombreDepartamento +
        "</strong> fue actualizado con exito</i>",
      icon: "sucess",
      timer: 3000,
    });
  };

  const getDepartamentID = async () => {
    try {
      const res = await axios.get(URI + IDDepartamento);
      setDepartamentData(res.data);
    } catch (error) {
      console.error("Error al obtener departamento por ID:", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h3 className="d-flex justify-content-center">
            Datos del Departamento
          </h3>
        </div>
        <div className="card-body">
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Departamento</label>
              <input
                value={departamentData.NombreDepartamento}
                onChange={(e) =>
                  setDepartamentData({
                    ...departamentData,
                    NombreDepartamento: e.target.value,
                  })
                }
                className="form-control"
                type="text"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                value={departamentData.lActivo}
                onChange={(e) =>
                    setDepartamentData({ ...departamentData, lActivo: e.target.value })
                }
                className="form-select"
              >
                <option value={"1"}>Activo</option>
                <option value={"0"}>Desactivado</option>
                required
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


export default CompEditDepartament;