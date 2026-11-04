import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="container page-section">
      <div className="page-intro"><p className="eyebrow">ESTAMOS PARA AYUDARTE</p><h1>Contacto</h1><p>¿Tenés alguna consulta? Dejanos tu mensaje en el formulario de demostración.</p></div>
      <div className="contact-layout">
        <div className="contact-details"><h2>Hablemos de tu próxima estadía</h2><p>Esta es una web académica y no representa un hotel real. Los mensajes no se envían por correo.</p><div className="contact-note">✉️ Formulario de práctica en React</div></div>
        <form className="form-card" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" required />
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tunombre@correo.com" required />
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Escribí tu consulta..." required />
          <button className="button button-primary" type="submit">Enviar mensaje</button>
          {sent && <p className="success-message" role="status">Formulario completado correctamente. Demostración: no se envió ningún correo.</p>}
        </form>
      </div>
    </section>
  );
}
export default Contact;
