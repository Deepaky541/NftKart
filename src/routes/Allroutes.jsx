
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/cart"
        element={
            <Cart />
        }
      ></Route>
    </Routes>
  );
}
