import React from "react";
import "./Porfolio.css";
import TarjetaPorfolio from "../components/TarjetaPorfolio.jsx";
import imagen1 from "../assets/web-1.png";
import imagen2 from "../assets/web-2.png";
import imagen3 from "../assets/Isicose .jpg";
import imagen4 from "../assets/Aplicaciones.png";
import imagen6 from "../assets/p1.jpg";
import imagen7 from "../assets/B1.jpg";
import imagen8 from "../assets/editorial-5.jpg"
import imagen9 from "../assets/diseño-4.jpg"
import imagen10 from "../assets/diseño-2.png"
import imagen11 from "../assets/diseño-3.png"
import boletinPDF from "../assets/editorial-13.pdf";
import boletinPDF2 from "../assets/instrucciones.pdf"

function Porfolio() {
  return (
    <section className="porfolio-container">
      <h2 className="porfolio-title">Mis trabajos</h2>

      <div className="tarjetas-grid">
        <TarjetaPorfolio
          titulo="Desarrollo Web"
          palabras={[
            {
              texto: "HTML5/CSS3",
              imagen: imagen1,
              descripcion:
                "Construcción de páginas web con HTML5, CSS3 y Javascript",
              Link: "https://recetasmarta.netlify.app/",
            },
            {
              texto: "React",
              imagen: imagen2,
              descripcion: "Diseño responsive y estructura.",
            },
          ]}
        />

        <TarjetaPorfolio
          titulo="Diseño Gráfico"
          palabras={[
            {
              texto: "Logotipos",
              imagen: imagen3,
              descripcion: "Composición visual e identidad",
            },
            {
              texto: "Aplicaciones de marca",
              imagen: imagen4,
              descripcion: "Diseño de material corporativo",
            },
            {
              texto: "Aplicaciones de marca",
              imagen: imagen11,
              descripcion: "Aplicaciones de marca en diferentes comunicaciones",
            },            
            {
              texto: "Material corporativo",
              imagen: imagen9,
              descripcion: "Diseño de manuales de instrucciones con aplicación de marca",
              pdf: boletinPDF2,
            },
            {
              texto: "Invitaciones y papelería personalizada",
              imagen: imagen10,
              descripcion: "Invitaciones de boda y aplicaciones de diseño en diferentes soportes",
            },
          ]}
        />

        <TarjetaPorfolio
          titulo="Maquetación y diseño editorial"
          palabras={[
            {
              texto: "Newsletter",
              imagen: imagen6,
              descripcion: "Memoria de actividades",
            },
            {
              texto: "Boletín cofradías",
              imagen: imagen7,
              descripcion: "Diseño y maquetación de boletín informativo",
            },
            {
              texto: "Agenda escolar",
              imagen: imagen8,
              descripcion: "Diseño y maquetación de agendas escolares con InDesign",
              pdf: boletinPDF,
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Porfolio;
