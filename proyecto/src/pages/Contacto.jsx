import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setSuccess(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contacto-section">
      <h2>Contacto</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          name="mensaje"
          id="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
        {success && <p className="success-msg">¡Mensaje enviado correctamente!</p>}
      </form>
    </div>
  );
}

export default Contacto;
