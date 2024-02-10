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
    const navigate = useNavigate();
    const {idusuario} = useParams();

    const update = async(e) => {
        e.preventDefault();
        try {
            await axios.put(URI + idusuario,{
                usuario: usuario,
                password: password,
                nombre: nombre,
                tipo_usuclave: tipo_usuclave,
                lactivo: lactivo
            });
            navigate('/');
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    useEffect(() => {
        getUserId();
    },[idusuario]);

   const getUserId = async () => {
    try {
        const res = await axios.get(URI + idusuario);
        setUsuario(res.data.usuario);
        setPassword(res.data.password);
        setNombre(res.data.nombre);
        setTipo(res.data.tipo_usuclave);
        setActivo(res.data.lactivo);
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
    }
   };

   return(
        <div>
            <h3>EDITAR USUARIO</h3>
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
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                    value={nombre}
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Permiso</label>
                    <input 
                    value={tipo_usuclave}
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
            </form>
        </div>
   );
}

export default CompEditUser;