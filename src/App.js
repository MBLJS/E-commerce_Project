import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import CreateAcc from "./pages/CreateAcc";
import Cart from "./pages/Cart";
import TopDeals from "./pages/TopDeals";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Admin from "./Dashboard/Admin";
import CreateProductPage from "./Dashboard/CreateProductPage";
import CreateUserPage from "./Dashboard/CreateUserPage";
import DashBoardProduct from "./Dashboard/DashBoardProduct";
import DashBoardUsers from "./Dashboard/DashBoardUsers"
import ProductProvider from "./Contexts/ProductContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/createAccount" element={<CreateAcc />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/TopDeals" element={<TopDeals />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:_id" element={<SingleProduct />} />

            {/* Dashboard */}
            <Route path="/AdminPage" element={<Admin />} />
            <Route path="/CreateProductPage" element={<CreateProductPage />} />
            <Route path="/CreateUserPage" element={<CreateUserPage />} />
            <Route path="/DashBoardProduct" element={<DashBoardProduct />} />
            <Route path="/DashBoardUsers" element={<DashBoardUsers />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
