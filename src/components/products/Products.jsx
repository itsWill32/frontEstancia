// import { useEffect, useState } from "react";
import Product from "../product/Product";
import { popularProducts } from "../../data";
import "./Products.css";
// import axios from "axios";

export default function Products() {
  // const [products, setProducts] = useState([]);
  // const [filterProducts, setFilterProducts] = useState([]);
   
  // useEffect( () =>{
  //   const getProducts = async () =>{
  //     try{
  //       const res = await axios.get( 
  //         cat 
  //         ? `http://localhost:8080/api/v1/products/allProducts?category=${cat}` 
  //         : "http://localhost:8080/api/v1/products/allProducts" 
  //       );

  //       setProducts(res.data);
  //     }catch(err){}
  //   };
  //   getProducts();
  // }, [cat]);

  // useEffect(() =>{
  //   cat && setFilterProducts(
  //     products.filter(item => Object.entries(filters).every(([key, value]) => 
  //       item[key].includes(value)
  //     ))
  //   )
  // }, [products,cat, filters]);

  // useEffect(() => {
  //   if(sort === "newest" ){
  //     setFilterProducts(prev => 
  //     [...prev].sort((a,b) => a.createdAt - b.createdAt)
  //     );
  //   }else if(sort === "priceAsc" ){
  //     setFilterProducts(prev => 
  //     [...prev].sort((a,b) => a.price - b.price)
  //     );
  //   }else{
  //     setFilterProducts(prev => 
  //     [...prev].sort((a,b) => a.price - b.price)
  //     );
  //   }
  // }, [sort]);

  return (
    <>
      <div className="container-Products">
        {/* { cat 
          ?  filterProducts.map((item) => <Product item={item} key={item.id} />)
          // slice para solo mostrar 8 produtos
          : products.slice(0,8).map((item) => <Product item={item} key={item.id} />)
        } */}

      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </div>
    </>
  );
}
