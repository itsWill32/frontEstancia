import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate, Link } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;  

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  width: 20%;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  height: 6vh;
`;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      console.log("Stripe Token:", stripeToken);
      console.log("Cart Total Price:", cart.totalPrice);

        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 500 //cart.totalPrice * 100,
          });
          navigate("/success", { stripeData: res.data,
            products: cart, });
        } catch (err) {
          console.error("Error en el pago:", err);
        }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.totalPrice , navigate]);

  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h1 className="title-Cart">Su Carrito</h1>
          <div className="container-header">
          
              <TopButton>
                <Link to={'/'}>Continuar Comprando
                </Link>
              </TopButton>
            <div className="topLinks-Cart">
              <span>Carrito de Compras(2)</span>
              <span>Su lista de desos(0)</span>
            </div>
            <TopButton type="filled">Comprar Ahora</TopButton>
          </div>

          <div className="container-Cart">
            <div style={{ flex: 3 }}>
              {cart.products.map((product) => (
                <div className="containerProduct-Cart" key={product._id}>
                  <div className="product-Detail">
                    <img
                      alt="product-img"
                      src={product.img}
                      className="img-Cart"
                    />
                    <div className="info-Product">
                      <span>
                        <b>Producto:</b> {product.name}
                      </span>
                      <span>
                        <b>ID:</b> {product._id}
                      </span>
                      <ProductColor color={product.color} />
                      <span>
                        <b>Talla:</b> {product.size}
                      </span>
                    </div>
                  </div>
                  <div className="price-Detail">
                    <div className="containerAmount-Cart">
                      <Add />
                      <div className="product-Amount">{product.quantity}</div>
                      <Remove />
                    </div>
                    <div className="product-Price">
                      $ {product.price * product.quantity}
                    </div>
                  </div>
                </div>
              ))}
              <hr className="hr-Cart" />
            </div>

            <div className="container-Summary">
              <h1 style={{ fontWeight: "200" }}>Resumen del Pedido</h1>
              <SummaryItem>
                <span>Subtotal</span>
                <span>$ {cart.totalPrice}</span>
              </SummaryItem>
              <SummaryItem>
                <span>Envío Estimado</span>
                <span>$ 5.90</span>
              </SummaryItem>
              <SummaryItem>
                <span>Descuento de Envío</span>
                <span>$ -5.90</span>
              </SummaryItem>
              <SummaryItem type="total">
                <span>Total</span>
                <span>$ {cart.totalPrice}</span>
              </SummaryItem>

              <StripeCheckout
                 name="Ecommerce Estancia"
                 image="https://example.com/logo.png"  
                 billingAddress
                 shippingAddress
                 description={`Su total es $${cart.totalPrice}`}
                 amount={cart.totalPrice * 100}
                 token={onToken}
                 stripeKey={KEY} 
              >
                <button className="button-Bottom">Comprar Ahora</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
