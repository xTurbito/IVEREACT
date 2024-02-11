import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URI = 'http://localhost:8000/usuarios/';

const CompEditUser = () => {
    const [usuario, setUsuario] = useState('');
    const [password,setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipo_usuclave, setTipo] = useState('');
    const [lactivo, setActivo] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {idUsuario} = useParams();

    const update = async(e) => {
        e.preventDefault();
        if (!usuario || !password || !nombre || !tipo_usuclave || !lactivo) {
            setError('Todos los campos son requeridos'); // Establecer mensaje de error
            return; // Detener el flujo si hay campos vacíos
        }
        try {
            await axios.put(URI + idUsuario,{
                usuario: usuario,
                password: password,
                nombre: nombre,
                tipo_usuclave: tipo_usuclave,
                lactivo: lactivo
            });
            navigate('/users');
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    useEffect(() => {
        getUserId();
    },[idUsuario]);

    // Lógica para inicializar los valores de los estados
    const initializeValues = (data) => {
        setUsuario(data.usuario || ''); // Si data.usuario es undefined, se inicializa con un string vacío
        setPassword(data.password || '');
        setNombre(data.nombre || '');
        setTipo(data.tipo_usuclave || '');
        setActivo(data.lactivo || '');
    };

    const getUserId = async () => {
        try {
            const res = await axios.get(URI + idUsuario);
            initializeValues(res.data); // Llamar a la función para inicializar los valores de los estados
        } catch (error) {
            console.error("Error fetching blog by ID:", error);
        }
    };

   return(
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
            <h3 className="d-flex justify-content-center">Datos del Usuario</h3>
        </div>
        <div className="card-body">
        <form onSubmit={update}> 
        <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input 
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Permiso</label>
                    <input 
                    value={tipo_usuclave}
                    onChange={(e) => setTipo(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                <select
                value={lactivo}
                onChange={(e) => setActivo(e.target.value)}
                className="form-select"
                >
                    <option value={"1"}>Activo</option>
                    <option value={"0"}>Desactivado</option>
                </select>
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
        </div>
        </div>  
     </div>
   );
}

export default CompEditUser;