import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/';

const CompCreateUser = () =>{
    const [usuario, setUsuario] = useState('');
    const [password,setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipo_usuclave, setTipo] = useState('');
    const [lactivo, setActivo] = useState('');
    const navigate = useNavigate();
    const bdUsuarios = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{
            usuario:usuario,
            password: password,
            nombre:nombre,
            tipo_usuclave: tipo_usuclave,
            lactivo: lactivo
        })
        navigate('/users')
    }

    return(
        <div className='container mt-3'>
        <div className='card'>
        <div className='card-header'>
            <h3 className='d-flex justify-content-center'>Nuevo Usuario</h3>
         </div>   
         <div className='card-body'>
         <form onSubmit={bdUsuarios}> 
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
                    <label className="form-label">Activo</label>
                    <input 
                    value={lactivo}
                    onChange={(e) => setActivo(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
        </div>
        </div>
     </div>
    );
}

export default CompCreateUser;