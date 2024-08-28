import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './ProductView.css';


const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;


export default function Product(){
  return (
    <div>
      <Navbar />
      <div className="container-P">
        <div style={{flex: 1}}>
          <img className="img-PV" alt="Product" src="https://media.revistagq.com/photos/5f3623e00c5e55e7fec1e57c/16:9/w_3999,h_2249,c_limit/ryan-plomp-bySPt2lySzg-unsplash.jpg" />
        </div>
        <div className="inf-Product">
          <h1>Denim Jumpsuit</h1>
          <p style={{  margin: '20px 0px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span style={{fontWeight: 100, fontSize: '40px'}}>$ 20</span>
          <div className="container-Filter">
            <div className="filter">
              <span style={{fontWeight: 200, fontSize: '20px'}}>Color</span>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </div>
            <div className="filter">
              <span style={{fontWeight: 200, fontSize: '20px'}}>Size</span>
              <select className="filter-Size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="add-Container">
            <div className="container-Amount">
              <Remove />
              <span className="amount">1</span>
              <Add />
            </div>
            <button type="submit">Añadir al carrito</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

