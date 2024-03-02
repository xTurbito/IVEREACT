import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/usuarios/';

const CompEditUser = () => {
    const [userData, setUserData] = useState({
        usuario: '',
        password: '',
        nombre: '',
        tipo_usuclave: '',
        lactivo: ''
        
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { idUsuario } = useParams();

    useEffect(() => {
        getUserId();
    }, [idUsuario]);

    const update = async (e) => {
        e.preventDefault();
        if (!userData.usuario || !userData.password || !userData.nombre || !userData.tipo_usuclave || !userData.lactivo) {
            setError('Todos los campos son requeridos'); // Establecer mensaje de error
            return; // Detener el flujo si hay campos vacíos
        }
        try {
            await axios.put(URI + idUsuario, userData);
            navigate('/users');
        } catch (error) {
            console.error("Error al actualizar:", error);
        }
        Swal.fire({
            title: "<strong>Actualizacion Exitosa</strong>",
            html: "<i>El usuario <strong>"+userData.nombre+"</strong> fue actualizado con exito</i>",
            icon: "sucess",
            timer:3000
          });
    };

    const getUserId = async () => {
        try {
            const res = await axios.get(URI + idUsuario);
            setUserData(res.data);
        } catch (error) {
            console.error("Error al obtener usuario por ID:", error);
        }
    };

   
    return (
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
                                value={userData.usuario}
                                onChange={(e) => setUserData({ ...userData, usuario: e.target.value })}
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input
                                value={userData.password}
                                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                value={userData.nombre}
                                onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Permiso</label>
                            <input
                                value={userData.tipo_usuclave}
                                onChange={(e) => setUserData({ ...userData, tipo_usuclave: e.target.value })}
                                type="text"
                                className="form-control"
                               
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Estado</label>
                            <select
                                value={userData.lactivo}
                                onChange={(e) => setUserData({ ...userData, lactivo: e.target.value })}
                                className="form-select"
                            >
                                <option value={"1"}>Activo</option>
                                <option value={"0"}>Desactivado</option>
                                required
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
