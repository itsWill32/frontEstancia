import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import './ProductList.css';
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters ({
      ...filters,
      [e.target.name]: value
    });
  };

  console.log('Selected Category:', cat);
  console.log('Filters:', filters);
  console.log('Sort Order:', sort);

  return (
    <div>
      <Navbar />
      <h1 style={{ margin: '20px' }}> Tenis {cat}</h1>
      <div className="main-Filter">
        <div style={{ margin: '20px' }}>
          <span className="contianerSort-PL" >Filter Products:</span>
          
          <select className="containerColor-PL" name="color" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>blanco</option>
            <option>negro</option>
            <option>rojo</option>
            <option>azul</option>
            <option>amarillo</option>
            <option>verde</option>
          </select>

          <select className="containerColor-PL" name="size" onChange={handleFilters}>
            <option disabled>Talla</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
          </select>
        </div>
        
        <div style={{ margin: '20px' }}>
          <span className="contianerSort-PL">Ordenar Productos:</span>
          <select className="containerColor-PL" onChange={e => setSort(e.target.value)}>
            <option value="newest" selected>Lo Más Nuevo</option>
            <option value="priceAsc">Precio (asc)</option>
            <option value="priceDesc">Precio (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
}
