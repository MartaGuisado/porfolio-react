import React, { useState } from "react";
import "./Curriculum.css";

function Curriculum() {
  const [openModal, setOpenModal] = useState(null);
  const [openCard, setOpenCard] = useState(null); // para expansión móvil

  const formaciones = [
    {
      titulo: "Grado en Diseño Gráfico",
      detalle:
        "Universidad de Sevilla · 2017–2021. Formación integral en diseño visual, tipografía, composición, branding y comunicación visual.",
    },
    {
      titulo: "Máster en UX/UI Design",
      detalle:
        "Escuela XYZ · 2022–2023. Especialización en diseño centrado en el usuario, prototipado, investigación UX y accesibilidad digital.",
    },
    {
      titulo: "Certificación en Diseño Web Front-End",
      detalle:
        "Google Actívate · 2024. Desarrollo web con HTML5, CSS3, JavaScript y React enfocado en la experiencia de usuario y el diseño responsive.",
    },
  ];

  const complementarias = [
    {
      titulo: "Curso de Copywriting Estratégico",
      detalle:
        "Platzi · 2024. Redacción persuasiva orientada a diseño y marketing digital.",
    },
    {
      titulo: "Taller de Animación con After Effects",
      detalle:
        "Domestika · 2023. Creación de motion graphics aplicados a diseño digital.",
    },
    {
      titulo: "Workshop de Diseño Accesible",
      detalle:
        "UXers Madrid · 2023. Buenas prácticas de accesibilidad en interfaces digitales.",
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
              className={`formacion-item ${openCard === i ? "open" : ""}`}
              data-tooltip={f.detalle}
              onClick={() => setOpenCard(openCard === i ? null : i)}
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon">{openCard === i ? "−" : "+"}</span>
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
              className={`formacion-item ${openCard === i ? "open" : ""}`}
              data-tooltip={f.detalle}
              onClick={() => setOpenCard(openCard === i ? null : i)}
            >
              <div className="item-header">
                <h4>{f.titulo}</h4>
                <span className="toggle-icon">{openCard === i ? "−" : "+"}</span>
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
            Me apasiona conectar ideas, personas y emociones a través del diseño.
            Creo en la comunicación efectiva como puente entre la creatividad y
            el impacto, y en la empatía como base para entender lo que las
            personas realmente necesitan. Disfruto del trabajo en equipo, donde
            cada intercambio de ideas se convierte en una oportunidad para
            aprender y crear algo mejor.
          </p>
          <p>
            Soy una persona curiosa y adaptable, siempre abierta a nuevas
            herramientas, tendencias y formas de pensar. Me motiva liderar con
            propósito, impulsando la colaboración, la motivación y la innovación.
            Afronto los retos con resolución y equilibrio emocional, buscando
            siempre soluciones creativas y efectivas.
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
            Domino el lenguaje visual y el copywriting para construir mensajes
            que no solo se vean bien, sino que comuniquen con intención. Me
            especializo en diseño visual y responsive, con una visión centrada en
            la experiencia de usuario.
          </p>
          <p>
            Trabajo con fluidez en entornos colaborativos gracias al control de
            versiones con Git, y combino mis habilidades de diseño con
            conocimientos técnicos en HTML5, CSS3, JavaScript y React. Además,
            aplico estrategias SEO para potenciar la visibilidad de los proyectos
            digitales.
          </p>
          <p>
            En el día a día, me apoyo en herramientas como Photoshop, Illustrator,
            InDesign y Canva para transformar ideas en experiencias visuales que
            inspiran y conectan.
          </p>
        </div>
      ),
    },
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
                className="curriculummodal-content"
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
