import React, { useState } from "react";
import "./Curriculum.css";

function Curriculum() {
  const [modal, setModal] = useState({ isOpen: false, content: "" });

  const sections = [
    {
      title: "Formación",
      content: `Grado en Publicidad y Relaciones Públicas.
Master en Diseño Web y UX/UI.`,
    },
    {
      title: "Formación complementaria",
      content: `Cursos de Photoshop, Illustrator, InDesign, Canva.
Certificaciones en Meta Ads y Metricool.`,
    },
    {
      title: "Soft Skills",
      content: `Creatividad, comunicación efectiva, trabajo en equipo,
resiliencia y capacidad de adaptación.`,
    },
    {
      title: "Competencias clave",
      content: `Diseño gráfico, desarrollo web (HTML, CSS, React),
estrategia digital y gestión de proyectos.`,
    },
  ];

  const openModal = (content) => setModal({ isOpen: true, content });
  const closeModal = () => setModal({ isOpen: false, content: "" });

  return (
    <div className="curriculum-section">
      <h2>Currículum</h2>
      <div className="curriculum-buttons">
        {sections.map((section, idx) => (
          <button
            key={idx}
            className="curriculum-btn"
            onClick={() => openModal(section.content)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {modal.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <p>{modal.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Curriculum;
