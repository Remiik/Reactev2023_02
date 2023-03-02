import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/Login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/pages/SignUp' element={<SignUp />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
