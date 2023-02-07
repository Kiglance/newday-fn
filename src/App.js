import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Shopping from "./pages/Shopping/Shopping";
import Header from "./components/Headers/Header";
import Shop from "./pages/shop/Shop";
import ClassShop from "./pages/shop/ClassShop.jsx";
import ShopOne from "./pages/shop/ShopOne";
import OneCategory from "./pages/shop/OneCategory";
import OneClasses from "./pages/shop/OneClasses";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProductActions from "./pages/ProductActions/ProductActions";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/Product/Product";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/Users/Users";
import "./index.css";
import Companies from "./pages/Companies/Companies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/start_shopping/" element={<Shopping />} exact={true} />
      <Route path="/dev/" element={<Header />} exact={true} />
      <Route path="/companies/:id/" element={<Shop />} exact={true} />
      <Route path="/companies/:id/:id" element={<ClassShop />} exact={true} />
      <Route path="/product/:id/" element={<ShopOne />} exact={true} />
      <Route path="/category/:id/" element={<OneCategory />} exact={true} />
      <Route path="/login/" element={<Login />} exact={true} />
      <Route path="/signup/" element={<Signup />} exact={true} />
      <Route path="/pdts/" element={<ProductActions />} exact={true} />
      <Route path="/cts/" element={<Categories />} exact={true} />
      <Route path="/companies/" element={<Companies />} exact={true} />
      <Route path="/companies/:id/" element={<Product />} exact={true} />
      <Route path="/dashboard/" element={<Dashboard />} exact={true} />
      <Route path="/users/" element={<Users />} exact={true} />
      <Route
        path="/category/class/:id/"
        element={<OneClasses />}
        exact={true}
      />
    </Routes>
  );
}

export default App;
