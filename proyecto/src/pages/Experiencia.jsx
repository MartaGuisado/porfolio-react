import React, { useState } from "react";
import "./Experiencia.css";

function Experiencia() {
  const [openModal, setOpenModal] = useState(null);
  const [openCard, setOpenCard] = useState(null);

  // --- Datos por secciones ---
  const comunicacionDigital = [
    {
      titulo: "Community manager",
      detalle:
        "Casa Palacio La Casa Blanca · 2024 - 2025 · Planificación de estrategias de contenido, SEO on-page y gestión de redes sociales",
    },
    {
      titulo: "Community Manager",
      detalle:
        "Andalubox · 2024 · Gestión de redes sociales y estrategia de contenidos orientada a crecimiento orgánico"
    },
    {
      titulo: "Redactora y copywriter digital",
      detalle:
        "Freelance · 2021 – 2022 · Redacción SEO, storytelling y conceptualización de mensajes para campañas online.",
    },
  ];

  const disenoGrafico = [
    {
      titulo: "Diseñadora gráfica freelance",
      detalle:
        "Freelance · 2021 – 2022 · Creación de identidades visuales, diseño de logotipos, papelería corporativa y branding digital.",
    },
  ];

  const comunicacionEstrategica = [
    {
      titulo: "Técnico de comunicación",
      detalle:
        "Ayuntamiento de Sevilla · 2012 · Redacción de notas de prensa y comunicados institucionales, gestión de crisis, grabación y edición de vídeo y audio para difusión, relaciones con medios y cobertura de eventos.",
    },
    {
      titulo: "Técnico de comunicación interna",
      detalle:
        "Sadiel · 2016 · Beca. Clipping de prensa, diseño, confección y difusión de boletín de noticias del sector y gestión de intranet",
    },
  ];

  const otrasExperiencias = [
    {
      titulo: "Documentalista",
      detalle:
        "Diario de Sevilla · 2005 – 2006 · Investigación, análisis de grandes volúmenes de datos, organización de archivos de prensa y soporte a periodistas",
    },
    {
      titulo: "Gestora de emergencias",
      detalle:
        "Qualytel - EPES · 2007 – 2012 · Toma de decisiones críticas bajo presión, priorización de la información, manejo de situaciones complejas, y coordinación interdepartamental.",
    },
  ];

  const sections = [
    {
      id: "comunicacion-digital",
      title: "Comunicación Digital",
      content: (
        <div className="formacion-lista">
          {comunicacionDigital.map((f, i) => (
            <div
              key={i}
              className={`formacion-item ${
                openCard === `digital-${i}` ? "open" : ""
              }`}
              data-tooltip={f.detalle}
              onClick={() =>
                setOpenCard(openCard === `digital-${i}` ? null : `digital-${i}`)
              }
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon touch-only">
                  {openCard === `digital-${i}` ? "−" : "+"}
                </span>
              </div>
              <p className="detalle">{f.detalle}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "diseno-grafico",
      title: "Diseño Gráfico",
      content: (
        <div className="formacion-lista">
          {disenoGrafico.map((f, i) => (
            <div
              key={i}
              className={`formacion-item ${
                openCard === `grafico-${i}` ? "open" : ""
              }`}
              data-tooltip={f.detalle}
              onClick={() =>
                setOpenCard(openCard === `grafico-${i}` ? null : `grafico-${i}`)
              }
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon touch-only">
                  {openCard === `grafico-${i}` ? "−" : "+"}
                </span>
              </div>
              <p className="detalle">{f.detalle}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "comunicacion-estrategica",
      title: "Comunicación Estratégica",
      content: (
        <div className="formacion-lista">
          {comunicacionEstrategica.map((f, i) => (
            <div
              key={i}
              className={`formacion-item ${
                openCard === `estrategica-${i}` ? "open" : ""
              }`}
              data-tooltip={f.detalle}
              onClick={() =>
                setOpenCard(
                  openCard === `estrategica-${i}` ? null : `estrategica-${i}`
                )
              }
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon touch-only">
                  {openCard === `estrategica-${i}` ? "−" : "+"}
                </span>
              </div>
              <p className="detalle">{f.detalle}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "otras",
      title: "Otras Experiencias",
      content: (
        <div className="formacion-lista">
          {otrasExperiencias.map((f, i) => (
            <div
              key={i}
              className={`formacion-item ${
                openCard === `otras-${i}` ? "open" : ""
              }`}
              data-tooltip={f.detalle}
              onClick={() =>
                setOpenCard(openCard === `otras-${i}` ? null : `otras-${i}`)
              }
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon touch-only">
                  {openCard === `otras-${i}` ? "−" : "+"}
                </span>
              </div>
              <p className="detalle">{f.detalle}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="curriculum-section">
      <h2> <em>Versatilidad, compromiso y resultados</em>: tres pilares 
que definen mi forma de trabajar y de aportar valor en cada proyecto. 🏆
      </h2>

      <div className="curriculum-buttons">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className="curriculum-btn"
            onClick={() => {
              setOpenModal(sec.id);
              setOpenCard(null);
            }}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {sections.map(
        (sec) =>
          openModal === sec.id && (
            <div
              key={sec.id}
              className="curriculum-modal-overlay"
              onClick={() => {
                setOpenModal(null);
                setOpenCard(null);
              }}
            >
              <div
                className="curriculum-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{sec.title}</h3>
                {sec.content}
                <button
                  className="curriculum-close-icon"
                  onClick={() => {
                    setOpenModal(null);
                    setOpenCard(null);
                  }}
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Experiencia;
