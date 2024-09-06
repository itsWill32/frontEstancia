import './FormRegister.css';
import { Link } from 'react-router-dom';

export default function FormRegister() {
  return (
    <>
     <div className='main-Register'>
      <div className='container-Register'>
        <h1 className='title-Register'>CREAR UNA CUENTA</h1>
        <form className='form-Register'>
          <input className='input-Register' type='text' placeholder="Nombre(s)" />
          <input className='input-Register' type='text' placeholder="Apellido(s)" />
          <input className='input-Register' type='email' placeholder="Correo" />
          <input className='input-Register' type='password' placeholder="Contraseña" />
          <input className='input-Register' type='password' placeholder="Confirmar Contraseña" />
          <span className='span-Register'>
            Al crear una cuenta, doy mi consentimiento para el procesamiento de mi información personal
            de acuerdo con la <b>POLÍTICA DE PRIVACIDAD</b>
          </span>
          <button className='button-Register'>
            <Link to={'/Home'}>Crear Cuenta</Link>
        </button>
        </form>
      </div>
    </div>
    </>
  )
}
