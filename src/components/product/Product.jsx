import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import "./Product.css";
import { Link, useLocation } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(147, 147, 147);
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  const location = useLocation();

   const id = location.pathname.split("/")[2];

  return (
    <Container>
      <div className="back-img" />
      <img className="img-Pr" alt="img-Product" src={item.img} />
      <Info>
        <div className="icon-Pr">
          <Link to={"/Product"}>
            <ShoppingCartOutlined />
          </Link>
          
        </div>
        <div className="icon-Pr">
          <Link to={`/Product/${item._id}`}>
            <SearchOutlined />
          </Link>
          
        </div>
        <div className="icon-Pr">
          <FavoriteBorderOutlined />
        </div>
      </Info>
    </Container>
  );
};

export default Product;
