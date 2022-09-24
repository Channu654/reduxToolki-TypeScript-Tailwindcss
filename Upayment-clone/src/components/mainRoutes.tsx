import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Navbar from './Navbar';

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
