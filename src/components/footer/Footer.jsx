import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="container-Desc">
          <h1>ESTANCIA E-COMMERCE.</h1>
          <p style={{ margin: "20px 0px" }}>
            Bienvenido a ESTANCIA E-COMMERCE, tu destino exclusivo para sneakers
            de alta calidad y ediciones limitadas. Explora nuestra colección
            cuidadosamente seleccionada de zapatillas únicas, donde cada par
            cuenta una historia. Únete a nuestra comunidad de apasionados por el
            calzado que valoran la autenticidad y la exclusividad en cada paso.
          </p>

          <div style={{ display: "flex" }}>
            <div
              className="social-Icons"
              style={{ backgroundColor: "#3B5999" }}
            >
              <Facebook />
            </div>
            <div
              className="social-Icons"
              style={{ backgroundColor: "#E4405F" }}
            >
              <Instagram />
            </div>
            <div
              className="social-Icons"
              style={{ backgroundColor: "#55ACEE" }}
            >
              <Twitter />
            </div>
            <div
              className="social-Icons"
              style={{ backgroundColor: "#E60023" }}
            >
              <Pinterest />
            </div>
          </div>
        </div>

        <div className="main-Links">
          <h3 style={{ marginBottom: "30px" }}>Enlaces Útiles</h3>
          <ul className="container-Links">
            <li className="links-f">Inicio</li>
            <li className="links-f">Carrito</li>
            <li className="links-f">Seccion de Hombres</li>
            <li className="links-f">Seccion de Mujeres</li>
            <li className="links-f">Mi Cuenta</li>
            <li className="links-f">Rastreo de Pedidos</li>
            <li className="links-f">Lista de Deseos</li>
            <li className="links-f">Términos</li>
          </ul>
        </div>

        <div className="container-Contacs">
          <h3 style={{ marginBottom: "30px" }}>Contacto</h3>
          <div className="contac-Item">
            <Room style={{ marginRight: "10px" }} /> Calle Tajín #256, Col.
            Narvarte Poniente, Benito Juárez, Cd. De Mexico.
          </div>
          <div className="contac-Item">
            <Phone style={{ marginRight: "10px" }} /> +52 9612784203
          </div>
          <div className="contac-Item">
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            estancia@contacto.com
          </div>
          <img className="img-Footer" alt="paymet-method" src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    </>
  );
}
