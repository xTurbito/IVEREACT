import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:8000/usuarios/';

const ComShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    getUsers();
  },[]);

  // Obtiene todos los usuarios 
  const getUsers = async () => {
    const res = await axios.get(URI);
    setUsers(res.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to="/create" className='btn btn-primary mt-2 mb-2'>AGREGAR USUARIO</Link>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>USUARIO</th>
                <th>PASSOWRD</th>
                <th>NOMBRE</th>
                <th>TIPO USUARIO</th>
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
                    <Link to={`/edit/${usuario.idUsuario}`} className='btn btn-info'>
                      EDITAR
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComShowUsers;
