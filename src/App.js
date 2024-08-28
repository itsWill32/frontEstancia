import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Pay from './components/pay/Pay';
import Login from './components/formLogin/FormLogin';
import Register from './components/formRegister/FormRegister';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Product from './pages/product/ProductView';
import ProductList from './pages/productList/ProductList';
import Footer from './components/footer/Footer';

function App() {

  const user = true;
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/'  element={user ? <Home /> : <Navigate to="/Login" /> } />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Products/:category' element={<ProductList />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/success' element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
