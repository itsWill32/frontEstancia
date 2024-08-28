import "./FormLogin.css";
import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <>
      <div className="main-Login">
        <div className="container-Login">
          <h1>INICIA SESION</h1>
          <form>
            <input type="email" placeholder="correo" />
            <input type="password" placeholder="contraseña" />
            <button type="submit">
              <Link to={'/Home'}>
                INICIAR SESION
              </Link>
            </button>
            <a href="/">NO RECUERDA SU CONTRASEÑA?</a>
            <Link to={'/Register'}>REGISTRATE</Link>
          </form>
        </div>
      </div>
    </>
  );
}
