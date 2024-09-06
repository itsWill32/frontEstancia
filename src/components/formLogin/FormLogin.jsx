import { useState, useEffect } from "react";
import "./FormLogin.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/apiCalls';
import { useNavigate } from "react-router-dom"; 

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const { isFetching, error, currentUser } = useSelector((state) => state.user); 

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/'); 
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="main-Login">
        <div className="container-Login">
          <h1 className="title-Login">INICIA SESION</h1>
          <form className="form-Login">
            <input className="input-Login" type="email" placeholder="correo" onChange={(e) => setEmail(e.target.value)} />
            <input className="input-Login" type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button className="button-Login" type="submit" onClick={handleClick} disabled={isFetching}>
              INICIAR SESION
            </button>
            {error && <span style={{ color: 'red' }}>Algo salió mal...</span>}
            <Link className="link-Login" href="/">NO RECUERDA SU CONTRASEÑA?</Link>
            <Link to={'/Register'}>REGÍSTRATE</Link>
          </form>
        </div>
      </div>
    </>
  );
}
