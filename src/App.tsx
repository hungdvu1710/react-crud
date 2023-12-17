import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./admin/Products";
import ProductsCreate from "./admin/ProductsCreate";
import Main from "./main/Main";
import ProductsEdit from "./admin/ProductsEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/admin/products" Component={Products} />
          <Route path="/admin/products/create" element={<ProductsCreate />} />
          <Route path='/admin/products/:id/edit' Component={ProductsEdit}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
