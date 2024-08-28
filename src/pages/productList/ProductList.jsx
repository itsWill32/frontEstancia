import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import './ProductList.css';
import { useLocation } from "react-router-dom";
import { useState } from "react";



export default function ProductList() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();

   const cat = location.pathname.split("/")[2];

   const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,

    })
   };


  return (
    <div>
      <Navbar />
      <h1 style={{margin: '20px'}}>{cat}</h1>
      <div  className="main-Filter">
        <div style={{margin: '20px'}}>
          <span>Filter Products:</span>
          <select name="color" onChange={handleFilters}>
            <option disabled>
              Color
            </option>
            <option>Blanco</option>
            <option>Negro</option>
            <option>Rojo</option>
            <option>Azul</option>
            <option>Amarillo</option>
            <option>Verde</option>
          </select>
          <select name="size" onChange={handleFilters}>
            <option disabled >
              Talla
            </option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
          </select>
        </div>
        <div style={{margin: '20px'}}>
          <span>Ordenar Productos:</span>
          <select onChange={e => setSort(e.target.value)}>
            <option value={"newest"} selected>Lo Mas Nuevo</option>
            <option value={"priceAsc"}>Precio (asc)</option>
            <option value={"priceDesc"}>Precio (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

