
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Orders from './components/Orders';



const App = () => {
  return (
    <div>
      <div className="min-h-screen">
      <Header />
      <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        
        <Route
          path="/"
          element={
            <>
              
              <ProductGrid />
              <Testimonials />
            </>
          }
        />
       
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;