import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/usuarios/";

const CompShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  // Obtiene todos los usuarios
  const getUsers = async () => {
    const res = await axios.get(URI);
    setUsers(res.data);
  };

  //Eliminar usuario
  const deleteUser = async (idUsuario) => {
    try {
      const res = await axios.get(`${URI}${idUsuario}`);
      const usuario = res.data;
      Swal.fire({
        title: "Confirmar Eliminado?",
        html:
          "<i>Realmente desea eliminar a <strong>" +
          usuario.nombre +
          "</strong></i>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${URI}${idUsuario}`);
          getUsers();
          Swal.fire({
            title: "Eliminado!",
            text: "" + usuario.nombre + " fue eliminado.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  };
  
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <Link
            to="/createUser"
            className="btn mt-2 mb-2 btn-hover-gray"
            style={{ color: "#8000ff" }}
          >
            Usuario{" "}
            <i className="fa-solid fa-plus" style={{ color: "#8000ff" }}></i>
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th>USUARIO</th>
                  <th>PASSOWRD</th>
                  <th>NOMBRE</th>
                  <th>TIPO USUARIO</th>
                  <th>ACTIVO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {users.map((usuario) => (
                  <tr key={usuario.idUsuario}>
                    <td>{usuario.usuario}</td>
                    <td>{usuario.password}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.tipo_usuclave}</td>
                    <td>
                      {usuario.lactivo.toString() === "1"
                        ? "Activo"
                        : "Desactivado"}
                    </td>
                    <td>
                      <Link
                        component={Link}
                        to={`/editUsuario/${usuario.idUsuario}`}
                        className="btn btn-hover-gray "
                        style={{ color: "blue" }}
                      >
                        <i className="fa-solid fa-user-pen"></i>
                      </Link>
                      <button
                        onClick={() => deleteUser(usuario.idUsuario)}
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
};

export default CompShowUsers;
