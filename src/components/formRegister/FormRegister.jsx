import './FormRegister.css';
import { Link } from 'react-router-dom';

export default function FormRegister() {
  return (
    <>
     <div className='main-Register'>
      <div className='container-Register'>
        <h1>CREAR UNA CUENTA</h1>
        <form>
          <input type='text' placeholder="Nombre(s)" />
          <input type='text' placeholder="Apellido(s)" />
          <input type='email' placeholder="Correo" />
          <input type='password' placeholder="Contraseña" />
          <input type='password' placeholder="Confirmar Contraseña" />
          <span>
            Al crear una cuenta, doy mi consentimiento para el procesamiento de mi información personal
            de acuerdo con la <b>POLÍTICA DE PRIVACIDAD</b>
          </span>
          <button type='submit' >
            <Link to={'/Home'}>Crear Cuenta</Link>
        </button>
        </form>
      </div>
    </div>
    </>
  )
}
