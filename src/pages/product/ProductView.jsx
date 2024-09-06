import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./ProductView.css";
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border : 1px solid black;
`;

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();



  const colorMapping = {
    negro: "black",
    blanco: "white",
    rojo: "red",
    azul: "blue",
    amarillo: "yellow",
    verde: "green",
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if(type  === 'des') {
     quantity > 1 && setQuantity(quantity-1);
    }else{
      setQuantity(quantity+1)
    }
  };

  const handleCart = () => {
    dispatch(
      addProduct({ ...product, quantity,color, size })
    )
  }

  return (
    <div>
      <Navbar />
      <div className="container-P">
        <div style={{ flex: 1 }}>
          <img className="img-PV" alt="Product" src={product.img} />
        </div>
        <div className="inf-Product">
          <h1 className="title-PV" >{product.name}</h1>
          <p style={{ margin: "20px 0px" }}>{product.desc}</p>
          <span style={{ fontWeight: 100, fontSize: "40px" }}>
            ${product.price}
          </span>
          <div className="container-Filter">
            <div className="filter">
              <span style={{ fontWeight: 200, fontSize: "20px" }}>Color</span>
              {product.color && product.color.length > 0 ? (
                product.color.map((c) => (
                  <FilterColor color={colorMapping[c]} key={c} onClick={() => setColor(c)} />
                ))
              ) : (
                <p>Sin Colores Disponibles</p>
              )}
            </div>
            <div className="filter">
              <span style={{ fontWeight: 200, fontSize: "20px" }}>Talla</span>
              {product.size && product.size.length > 0 ? (
                <select className="filter-Size" onChange={(e) => setSize(e.target.value)}>
                  {product.size.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              ) : (
                <p>Sin Tallas Disponibles</p>
              )}
            </div>
          </div>
          <div className="add-Container">
            <div className="container-Amount">
              <Remove onClick={ () => handleQuantity("des") } style={{cursor:'pointer'}}  />
              <span className="amount">{quantity}</span>
              <Add onClick={ () => handleQuantity("inc") } style={{cursor:'pointer'}}   />
            </div>
            <button className="button-PV" onClick={handleCart}>Añadir al carrito</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
