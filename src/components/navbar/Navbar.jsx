import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div style={{ height: "60px" }}>
        <div className="container-Navbar">
          <div className="container-Search">
            <div className="search-Input">
              <input
                type="search"
                style={{ border: "none" }}
                placeholder="Search"
              />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </div>
          </div>

          <div className="container-Logo">
            <h1 style={{ fontWeight: "bold" }}>ESTANCIA E-COMMERCE.</h1>
          </div>

          <div className="container-Links">
            <div className="link-Navbar">
              <a href="/Register">REGISTRARSE</a>
            </div>
            <div className="link-Navbar">
              <a href="/">INICIAR SESION</a>
            </div>
            <div className="link-Navbar">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
