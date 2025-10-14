import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css"; // Nuevo CSS para el layout

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
