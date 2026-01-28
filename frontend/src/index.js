import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";
import About from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/product"
        element={
          <Layout>
            <ProductsPage />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <PricingPage />
          </Layout>
        }
      />
      <Route
        path="/support"
        element={
          <Layout>
            <SupportPage />
          </Layout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
