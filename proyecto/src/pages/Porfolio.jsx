import React from "react";
import "./Porfolio.css";
import Tarjeta from "../components/Tarjeta.jsx";
import imagen1 from "../assets/Lanzada.webp";
import imagen2 from "../assets/Lanzada2.webp";
import imagen3 from "../assets/Lanzada3.webp";

function Porfolio() {
  return (
    <section className="porfolio-container">
      <h2 className="porfolio-title">Mis trabajos</h2>

      <div className="tarjetas-grid">
        <Tarjeta
          titulo="Proyecto Uno"
          palabras={[
            { texto: "Branding", imagen: imagen1, descripcion: "Proceso creativo y logotipo." },
            { texto: "Web", imagen: imagen2, descripcion: "Diseño responsive y estructura." },
            { texto: "UX/UI", imagen: imagen3, descripcion: "Prototipado y experiencia de usuario." },
          ]}
        />

        <Tarjeta
          titulo="Proyecto Dos"
          palabras={[
            { texto: "Identidad", imagen: imagen1, descripcion: "Sistema visual completo." },
            { texto: "Landing", imagen: imagen2, descripcion: "Diseño enfocado en conversión." },
            { texto: "Interacción", imagen: imagen3, descripcion: "Microinteracciones animadas." },
          ]}
        />

        <Tarjeta
          titulo="Proyecto Tres"
          palabras={[
            { texto: "Estrategia", imagen: imagen1, descripcion: "Objetivos y posicionamiento." },
            { texto: "Diseño", imagen: imagen2, descripcion: "Composición visual e identidad." },
            { texto: "Prototipo", imagen: imagen3, descripcion: "Wireframes e interacción." },
          ]}
        />
      </div>
    </section>
  );
}

export default Porfolio;
