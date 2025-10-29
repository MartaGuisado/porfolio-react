import React, { useState } from "react";
import "./Curriculum.css";

function Curriculum() {
  const [openModal, setOpenModal] = useState(null);
  const [openCard, setOpenCard] = useState(null);

  const formaciones = [
    {
      titulo: "Licenciatura en Comunicación",
      detalle:
        "Universidad de Sevilla · 2001–2005. Especialidad en Publicidad y Relaciones Públicas.",
    },
    {
      titulo: "Máster en Dirección de Comunicación Empresarial e Institucional",
      detalle:
        "Universidad de Sevilla · 2011–2012. Estrategias de comunicación y gestión de crisis.",
    },
    {
      titulo: "Posgrado en Marketing Online y RRSS",
      detalle:
        "Universidad de Barcelona & OBS · 2011–2012. Campañas digitales y analítica web.",
    },
  ];

  const complementarias = [
    {
      titulo: "Desarrollo de aplicaciones con tecnologías web",
      detalle:
        "Certificación en Desarrollo de aplicaciones con tecnologías web · 2025. HTML5, CSS3, JavaScript, React, Git, Tailwind, Figma, accesibilidad, responsividad y SEO.",
    },
    {
      titulo: "Diseño y Experiencia de Usuario (UX/UI)",
      detalle:
        "Google · 2025. Fundamentos de UX, investigación de usuarios, diseño de interacción y prototipado.",
    },
    {
      titulo: "FP en Diseño Gráfico y autoedición",
      detalle:
        "Confederación de Empresarios de Andalucía · 2010. Diseño gráfico, maquetación, retoque y composición digital.",
    },
  ];

  const sections = [
    {
      id: "formacion",
      title: "Formación",
      content: (
        <div className="formacion-lista">
          {formaciones.map((f, i) => (
            <div
              key={i}
              className={`formacion-item ${openCard === `formacion-${i}` ? "open" : ""}`}
              data-tooltip={f.detalle}
              onClick={() =>
                setOpenCard(openCard === `formacion-${i}` ? null : `formacion-${i}`)
              }
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon touch-only">
                  {openCard === `formacion-${i}` ? "−" : "+"}
                </span>
              </div>
              <p className="detalle">{f.detalle}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "complementaria",
      title: "Formación Complementaria",
      content: (
        <div className="formacion-lista">
          {complementarias.map((f, i) => (
            <div
              key={i}
              className={`formacion-item ${openCard === `complementaria-${i}` ? "open" : ""}`}
              data-tooltip={f.detalle}
              onClick={() =>
                setOpenCard(openCard === `complementaria-${i}` ? null : `complementaria-${i}`)
              }
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon touch-only">
                  {openCard === `complementaria-${i}` ? "−" : "+"}
                </span>
              </div>
              <p className="detalle">{f.detalle}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "softskills",
      title: "Soft Skills",
      content: (
        <div className="softskills-content">
          <p>
            Me apasiona <b>conectar ideas, personas y emociones</b> a través del diseño.
            Creo en la comunicación efectiva como puente entre la creatividad y el impacto.
          </p>
          <p>
            Disfruto del <b>trabajo en equipo</b>, donde cada intercambio de ideas se convierte
            en una oportunidad para aprender y crear algo mejor.
          </p>
          <p>
            Soy una persona <b>curiosa y adaptable</b>, abierta a nuevas herramientas y tendencias.
            Me motiva liderar con propósito e impulsar la colaboración y la innovación.
          </p>
        </div>
      ),
    },
    {
      id: "competencias",
      title: "Competencias Clave",
      content: (
        <div className="competencias-content">
          <p>
            Domino el lenguaje visual y el copywriting para construir mensajes que no solo se vean bien,
            sino que <b>comuniquen con intención</b>.
          </p>
          <p>
            Trabajo con fluidez en entornos colaborativos gracias al control de versiones con Git,
            y combino mis habilidades de diseño con conocimientos técnicos en HTML5, CSS3, JavaScript y React.
          </p>
          <p>
            En el día a día utilizo herramientas como <b>Photoshop, Illustrator, InDesign y Canva</b>
            para transformar ideas en experiencias visuales.
          </p>
        </div>
      ),
    },,
  ];

  return (
    <div className="curriculum-section">
      <h2>
        Mente inquieta, en constante <em>beta-test</em>. Buscando siempre la mejor
        versión de mí para aplicar soluciones innovadoras 😉
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

export default Curriculum;
