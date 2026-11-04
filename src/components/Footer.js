import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>✦ Hotel Aurora</strong>
          <p>Un espacio imaginario para descansar y desconectar.</p>
        </div>
        <div className="footer-links">
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/reservas">Reservas</Link>
        </div>
        <span className="footer-note">© 2026 · Proyecto académico en React · Reservas de demostración</span>
      </div>
    </footer>
  );
}
export default Footer;
