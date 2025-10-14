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
      content: "Comunicación, liderazgo, trabajo en equipo..."
    },
    {
      id: "competencias",
      title: "Competencias Clave",
      content: "Diseño web, publicidad, análisis de datos..."
    }
  ];

  return (
    <div className="curriculum-section">
      <h2>Mente inquieta, en constante beta-test. Busco siempre la mejor versión de mí para aplicar soluciones innovadoras.</h2>
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