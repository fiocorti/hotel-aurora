import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">BIENVENIDOS A HOTEL AURORA</p>
            <h1>Tu próxima pausa tiene un lugar.</h1>
            <p>Una experiencia de calma, comodidad y naturaleza. Explorá nuestras cuatro habitaciones y elegí tu estadía ideal.</p>
            <div className="hero-actions">
              <Link to="/reservas" className="button button-primary">Ver habitaciones</Link>
              <Link to="/acerca" className="button button-ghost">Conocé el hotel ↗</Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustración decorativa de un hotel en la naturaleza" role="img">
            <div className="hero-sun" />
            <div className="hero-hill hill-back" /><div className="hero-hill hill-front" />
            <div className="hotel-drawing"><div className="hotel-roof" /><div className="hotel-wall"><span>▣</span><span>▣</span><span>▣</span><span>▣</span><span>▣</span><span>▣</span></div></div>
            <span className="hero-visual-caption">Donde el tiempo va más lento.</span>
          </div>
        </div>
      </section>
      <section className="container features-section">
        <div className="section-heading"><p className="eyebrow">LO QUE NOS HACE ESPECIALES</p><h2>Pequeños detalles, grandes momentos</h2></div>
        <div className="feature-grid">
          <div className="feature-card"><span>☕</span><h3>Desayunos tranquilos</h3><p>Empezá el día a tu ritmo con una propuesta fresca y simple.</p></div>
          <div className="feature-card"><span>🌳</span><h3>Entorno natural</h3><p>Ambientes acogedores diseñados para descansar.</p></div>
          <div className="feature-card"><span>🛎️</span><h3>Atención cercana</h3><p>Una experiencia cálida desde que llegás.</p></div>
        </div>
      </section>
      <section className="container cta-section"><div><p className="eyebrow">CUATRO FORMAS DE DESCANSAR</p><h2>¿Ya elegiste tu habitación?</h2><p>Tenemos opciones para escapadas, viajes en pareja o en familia.</p></div><Link className="button button-primary" to="/reservas">Explorar las 4 habitaciones</Link></section>
    </>
  );
}
export default Home;
