import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import miFoto from "../assets/mi-foto.png";
import ReactIcon from "../assets/icons/react.png";
import HtmlIcon from "../assets/icons/html5.png";
import CssIcon from "../assets/icons/css3.png";
import IllustratorIcon from "../assets/icons/illustrator.png";
import InDesignIcon from "../assets/icons/indesign.png";
import CanvaIcon from "../assets/icons/canva.png";
import MetaIcon from "../assets/icons/meta.png";
import MetricoolIcon from "../assets/icons/metricool.png";
import PhotoshopIcon from "../assets/icons/photoshop.png";

function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".flip-card");
    const toggleFlip = (e) => e.currentTarget.classList.toggle("flipped");
    cards.forEach((card) => card.addEventListener("click", toggleFlip));
    return () => {
      cards.forEach((card) => card.removeEventListener("click", toggleFlip));
    };
  }, []);

  return (
    <div className="home-page">
      {/* 🔹 Imagen fija lateral */}
      <div className="home-photo-bg"></div>

      {/* 🔹 Contenedor principal */}
      <div className="home-content-area">
        {/* HERO CARD */}
        <div className="hero-card fade-in">
          <div className="home-content">
            <div className="home-text">
              <h1>Marta Guisado Simón</h1>
              <p>
                Diseñadora digital con una visión global del diseño, la comunicación y la
                experiencia de usuario. Transformo ideas en soluciones visuales que inspiran,
                comunican y funcionan. Combino creatividad, técnica y sensibilidad para dar
                vida a proyectos que conectan marcas y personas a través de la emoción, la
                claridad y el propósito.
              </p>
              <div className="home-buttons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn github-btn"
                >
                  <FaGithub className="icon" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn linkedin-btn"
                >
                  <FaLinkedin className="icon" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 TARJETAS */}
        <div className="cards-section">
          {/* Tarjeta 1 */}
          <div className="info-card flip-card">
            <div className="flip-inner">
              <div className="card-front">
                <div className="card-icon">💡</div>
                <h3>Herramientas creativas</h3>
                <p>
                  Diseño y desarrollo web con equilibrio entre estética, usabilidad y creatividad.
                  Me adapto a nuevas herramientas y tendencias con rapidez y curiosidad.
                </p>
              </div>
              <div className="card-back">
                <h3>Habilidades destacadas</h3>
                <div className="icon-cloud">
                  <img src={ReactIcon} alt="React" className="tool-icon" />
                  <img src={HtmlIcon} alt="HTML5" className="tool-icon" />
                  <img src={CssIcon} alt="CSS3" className="tool-icon" />
                  <img src={IllustratorIcon} alt="Illustrator" className="tool-icon" />
                  <img src={InDesignIcon} alt="InDesign" className="tool-icon" />
                  <img src={CanvaIcon} alt="Canva" className="tool-icon" />
                  <img src={MetaIcon} alt="Meta" className="tool-icon" />
                  <img src={MetricoolIcon} alt="Metricool" className="tool-icon" />
                  <img src={PhotoshopIcon} alt="Photoshop" className="tool-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="info-card flip-card">
            <div className="flip-inner">
              <div className="card-front">
                <div className="card-icon">⚙️</div>
                <h3>Enfoque de trabajo</h3>
                <p>
                  Creo en la unión entre estrategia y diseño. Cada proyecto es una oportunidad para
                  conectar con las personas.
                </p>
              </div>
              <div className="card-back">
                <h3>Visión alternativa</h3>
                <p>
                  Mi proceso se centra en comprender las necesidades reales del público
                  para transformar ideas en experiencias visuales efectivas.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="info-card flip-card">
            <div className="flip-inner">
              <div className="card-front">
                <div className="card-icon">❤️</div>
                <h3>Valores personales</h3>
                <p>
                  Lo que me hace diferente a la IA: creatividad, implicación, resiliencia
                  y pasión por lo que hago.
                </p>
              </div>
              <div className="card-back">
                <h3>Más allá del trabajo</h3>
                <p>
                  Me motiva aprender, crecer y aportar valor humano en cada proyecto.
                  Disfruto los retos que me sacan de la zona de confort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
