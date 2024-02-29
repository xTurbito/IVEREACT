import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteButton, EditButton } from "../Buttons/TableButtons";


const URI = "http://localhost:8000/usuarios/";

const ComShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  // Obtiene todos los usuarios
  const getUsers = async () => {
    const res = await axios.get(URI);
    setUsers(res.data);
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            
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
                        style={{marginRight: '8px'}}
                      >
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
};

export default ComShowUsers;
