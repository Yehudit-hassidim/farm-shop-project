import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './features/home/Home';
import About from './features/about/About'; 
import Contact from './features/contact/Contact';
import ProductList from './features/product/ProductList';
import ShoppingCart from './features/cart/Cart';
import Footer from './features/footer/Footer';
import Checkout from './features/checkout/Checkout';
import ShippingPolicy from './features/policy/ShippingPolicy';
import ProductDetails from './features/product/ProductDetails';

const RouterApp = () => {
  return (
    <Router>
      <div style={{ direction: 'rtl', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
        <Navbar />
        <main style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:categoryName" element={<ProductList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default RouterApp;