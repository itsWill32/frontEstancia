import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Products.css";
import axios from "axios";

export default function Products({cat, filters, sort}) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
   
  useEffect( () =>{
    const getProducts = async () =>{
      try{
        const res = await axios.get( 
          cat 
          ? `http://localhost:8080/api/v1/products/allProducts?category=${cat}` 
          : "http://localhost:8080/api/v1/products/allProducts" 
        );

        setProducts(res.data);
      }catch(err){
        console.log('try getPro')
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() =>{
    cat && 
      setFilterProducts(
        products.filter(item => 
          Object.entries(filters).every(([key, value]) => 
            item[key].includes(value)
      ))
    )
  }, [products,cat, filters]);

  useEffect(() => {
    if(sort === "newest" ){
        setFilterProducts(prev =>   
          [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    }else if(sort === "priceAsc" ){
        setFilterProducts(prev => 
          [...prev].sort((a,b) => a.price - b.price)
      );
    }else{
        setFilterProducts(prev => 
          [...prev].sort((a,b) => a.price - b.price)
      );
    }
  }, [sort]);

  return (
    <>
      <div className="container-Products">
        { cat 
          ?  filterProducts.map((item) => <Product item={item} key={item.id} />)
          // slice para solo mostrar 8 produtos
          : products.slice(0,8)
          .map((item) => <Product item={item} key={item.id} />)
        } 
      </div>
    </>
  );
}

