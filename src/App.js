import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Pay from './components/pay/Pay';
import Login from './components/formLogin/FormLogin';
import Register from './components/formRegister/FormRegister';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Product from './pages/product/ProductView';
import ProductList from './pages/productList/ProductList';
import Success from './pages/succes/Succes';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/Login" />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Products/:category' element={<ProductList />} />
        <Route path='/ShopProduct/:id' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
