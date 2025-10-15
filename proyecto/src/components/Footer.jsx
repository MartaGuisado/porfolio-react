import React from "react";
import "./Footer.css";

function Footer() {
  // 1️⃣ Crear la fecha y formatearla
  const today = new Date();
  let formattedDate = today.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 2️⃣ Primera letra en mayúscula
  formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  // 3️⃣ Retornar JSX
  return (
    <footer className="footer">
      <p>© 2025 Marta Guisado Simón. Todos los derechos reservados.</p>
      <p>{formattedDate}</p>
    </footer>
  );
}

export default Footer;
