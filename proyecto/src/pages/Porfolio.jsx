import React from "react";
import "./Porfolio.css";
import TarjetaPorfolio from "../components/TarjetaPorfolio.jsx";
import imagen1 from "../assets/Lanzada.webp";
import imagen2 from "../assets/web-2.png";
import imagen3 from "../assets/Isicose .jpg";
import imagen4 from "../assets/Aplicaciones.png"
import imagen6 from "../assets/p1.jpg"
import imagen7 from "../assets/B1.jpg"

import { Link } from "react-router-dom";

function Porfolio() {
  return (
    <section className="porfolio-container">
      <h2 className="porfolio-title">Mis trabajos</h2>

      <div className="tarjetas-grid">
        <TarjetaPorfolio
          titulo="Desarrollo Web"
          palabras={[
            { texto: "HTML5/CSS3", imagen: imagen1, descripcion: "Construcción de páginas web con HTML5, CSS3 y Javascript",Link: "https://recetasmarta.netlify.app/"},
            { texto: "React", imagen: imagen2, descripcion: "Diseño responsive y estructura." },
          ]}
        />

        <TarjetaPorfolio
          titulo="Diseño Gráfico"
          palabras={[
            { texto: "Logotipos", imagen: imagen3, descripcion: "Composición visual e identidad" },
            { texto: "Aplicaciones de marca", imagen: imagen4, descripcion: "Diseño de material corporativo" },
          ]}
        />

        <TarjetaPorfolio
          titulo="Maquetación y diseño editorial"
          palabras={[
            { texto: "Newsletter", imagen: imagen6, descripcion: "Memoria de actividades" },
            { texto: "Boletín cofradías", imagen: imagen7, descripcion: "Diseño y maquetación de boletín informativo" },
          ]}
        />
      </div>
    </section>
  );
}

export default Porfolio;
