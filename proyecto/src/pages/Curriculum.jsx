import React, { useState } from "react";
import "./Curriculum.css";

function Curriculum() {
  const [openModal, setOpenModal] = useState(null);

  const sections = [
    {
      id: "formacion",
      title: "Formación",
      content: "Aquí va toda tu formación académica..."
    },
    {
      id: "complementaria",
      title: "Formación Complementaria",
      content: "Cursos, certificaciones y talleres..."
    },
    {
      id: "softskills",
      title: "Soft Skills",
      content: ("Me apasiona conectar ideas, personas y emociones a través del diseño. Creo en la comunicación efectiva como puente entre la creatividad y el impacto, y en la empatía como base para entender lo que las personas realmente necesitan. Disfruto del trabajo en equipo, donde cada intercambio de ideas se convierte en una oportunidad para aprender y crear algo mejor."+" Soy una persona curiosa y adaptable, siempre abierta a nuevas herramientas, tendencias y formas de pensar. Me motiva liderar con propósito, impulsando la colaboración, la motivación y la innovación. Afronto los retos con resolución y equilibrio emocional, buscando siempre soluciones creativas y efectivas.")
    },
    {
      id: "competencias",
      title: "Competencias Clave",
      content: ("Domino el lenguaje visual y el copywriting para construir mensajes que no solo se vean bien, sino que comuniquen con intención. Me especializo en diseño visual y responsive, con una visión centrada en la experiencia de usuario."+"Trabajo con fluidez en entornos colaborativos gracias al control de versiones con Git, y combino mis habilidades de diseño con conocimientos técnicos en HTML5, CSS3, JavaScript y React. Además, aplico estrategias SEO para potenciar la visibilidad de los proyectos digitales."+"el día a día, me apoyo en herramientas como Photoshop, Illustrator, InDesign y Canva para transformar ideas en experiencias visuales que inspiran y conectan.")
    }
  ];

  return (
    <div className="curriculum-section">
      <h2>Mente inquieta, en constante beta-test. Buscando siempre la mejor versión de mí para aplicar soluciones innovadoras 😉</h2>
      <div className="curriculum-buttons">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className="curriculum-btn"
            onClick={() => setOpenModal(sec.id)}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {sections.map((sec) => (
        openModal === sec.id && (
          <div
            key={sec.id}
            className="modal-overlay"
            onClick={() => setOpenModal(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{sec.title}</h3>
              <p>{sec.content}</p>
              <button className="close-btn" onClick={() => setOpenModal(null)}>
                Cerrar
              </button>
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default Curriculum;