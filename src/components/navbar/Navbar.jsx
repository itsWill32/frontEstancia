import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined, Logout } from "@mui/icons-material";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {

  const quantity = useSelector(state => state.cart.quantity);

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
              <Link to={'/Login'}>
                <Logout />
              </Link>
            </div>
            <div className="link-Navbar">
              <Link to={"/Cart"}>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
