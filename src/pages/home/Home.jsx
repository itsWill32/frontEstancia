import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Categories from '../../components/categories/Categories';
import Products from "../../components/products/Products";
export default function Home() {
  return (
    <>
      <Navbar />
      <Categories/>
      <Products/>
      <Footer/>
    </>
  )
}
