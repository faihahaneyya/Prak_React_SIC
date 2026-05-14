import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Loading from "./components/Loading";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Product = React.lazy(() => import("./pages/Product"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Sidebar = React.lazy(() => import ("./components/Sidebar"));
const Header = React.lazy (() => import ("./components/Header"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route element={<MainLayout />}>
          {/* PERBAIKAN DI SINI: Ganti 'Produk' menjadi 'Product' */}
          <Route path="/products" element={<Product />} /> 
          <Route path="/products/:id" element={<ProductDetail />} /> 
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error/:code" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;