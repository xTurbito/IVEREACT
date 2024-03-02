import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/usuarios/";

const CompCreateUser = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipo_usuclave, setTipo] = useState("");
  const [lactivo, setActivo] = useState("");
  const navigate = useNavigate();
  const bdUsuarios = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      usuario,
      password,
      nombre,
      tipo_usuclave,
      lactivo
    });
    navigate("/users");
    Swal.fire({
      title: "<strong>Registro Exitoso</strong>",
      html:
        "<i>El usuario <strong>" +
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
          <h3 className="d-flex justify-content-center">Nuevo Usuario</h3>
        </div>
        <div className="card-body">
          <form onSubmit={bdUsuarios}>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Permiso</label>
              <input
                value={tipo_usuclave}
                onChange={(e) => setTipo(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Activo</label>
              <select
                value={lactivo}
                onChange={(e) => setActivo(e.target.value)}
                className="form-select"
                required // Aquí agregamos la propiedad required
              >
                <option value="">Selecciona un estado</option>
                <option value="Activo">Activo</option>
                <option value="Desactivado">Desactivado</option>
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

export default CompCreateUser;
