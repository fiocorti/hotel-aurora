import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="container page-section">
      <div className="page-intro"><p className="eyebrow">NUESTRA HISTORIA</p><h1>Acerca de Hotel Aurora</h1><p>Un hotel ficticio creado para practicar el desarrollo de interfaces y la navegación con React.</p></div>
      <div className="about-layout">
        <div className="about-highlight"><span className="about-sparkle">✦</span><p>Una pausa también puede ser un destino.</p></div>
        <div className="about-copy"><h2>Una estadía hecha para disfrutar</h2><p>En Hotel Aurora imaginamos un lugar donde la comodidad y la naturaleza se encuentran. Nuestras cuatro categorías de habitaciones ofrecen distintas alternativas según el tipo de viaje.</p><p>Este sitio forma parte de un proyecto académico: permite explorar habitaciones, calcular el costo de una estadía y simular una reserva sin realizar pagos ni guardar datos en un servidor.</p><Link to="/reservas" className="button button-primary">Explorar habitaciones</Link></div>
      </div>
    </section>
  );
}
export default About;
