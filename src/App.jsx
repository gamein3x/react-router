import { useState } from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import LostPage from './pages/LostPage';

function App() {
  <BrowserRouter >
    <Routes>
      {/* https://localhost:5172/ */}
      <Route index element={<Home />} />
      {/* https://localhost:5172/about */}
      <Route path="about" element={<About />} />
      {/* https://localhost:5172/products */}
      <Route path="products" element={<Products />} />
      {/* https://localhost:5172/404 */}
      <Route path="*" element={<LostPage />}/>
    </Routes>
  </BrowserRouter>
}

export default App;
