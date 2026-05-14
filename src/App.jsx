import { useState } from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import { About, Home, LostPage, Products } from './pages';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* https://localhost:5172/ */}
          <Route index element={<Home />} />
          {/* https://localhost:5172/about */}
          <Route path="about" element={<About />} />
          {/* https://localhost:5172/products */}
          <Route path="products" element={<Products />} />
          {/* https://localhost:5172/LostPage */}
          <Route path="*" element={<LostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
