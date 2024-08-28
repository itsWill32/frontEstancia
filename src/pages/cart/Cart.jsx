import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export default function Cart() {
  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h1>Su Carrito</h1>
          <div className="container-header">
            <TopButton>Continuar Comprando</TopButton>
            <div>
              <span>Carrito de Compras(2)</span>
              <span>Su lista de desos(0)</span>
            </div>
            <TopButton type="filled">Comprar Ahora</TopButton>
          </div>
          <div className="container-Cart">
            <div style={{ flex: 3 }}>
              <div className="container-Product">
                <div className="product-Detail">
                  <img
                    alt="product-img"
                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  />
                  <div className="info-Product">
                    <span>
                      <b>Producto:</b> JESSIE THUNDER SHOES
                    </span>
                    <span>
                      <b>ID:</b> 93813718293
                    </span>
                    <ProductColor color="black" />
                    <span>
                      <b>Talla:</b> 37.5
                    </span>
                  </div>
                </div>
                <div className="price-Detail">
                  <div className="container-Amount">
                    <Add />
                    <div className="product-Amount">2</div>
                    <Remove />
                  </div>
                  <div className="product-Price">$ 30</div>
                </div>
              </div>
              <hr
                style={{
                  backgroundColor: "#eee",
                  border: "none",
                  height: "1px",
                }}
              />
              <div className="container-Product">
                <div className="product-Detail">
                  <img
                    alt="product-img"
                    src="/Sneaker-P2.png"
                  />
                  <div className="info-Product">
                    <span>
                      <b>Producto:</b> Nike Air Max
                    </span>
                    <span>
                      <b>ID:</b> 93813718293
                    </span>
                    <ProductColor color="black" />
                    <span>
                      <b>Talla:</b> 28
                    </span>
                  </div>
                </div>
                <div className="price-Detail">
                  <div className="container-Amount">
                    <Add />
                    <div className="product-Amount">1</div>
                    <Remove />
                  </div>
                  <div className="product-Price">$ 20</div>
                </div>
              </div>
            </div>
            <div className="container-Summary">
              <h1 style={{ fontWeight: "200" }}>Resumen del Pedido</h1>
              <SummaryItem>
                <span>Subtotal</span>
                <span>$ 80</span>
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
                <span>$ 80</span>
              </SummaryItem>
              <button type="submit" className="button-Bottom">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
