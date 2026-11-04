import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Hotel Aurora, inicio">
          <span className="brand-symbol" aria-hidden="true">✦</span>
          <span>Hotel <strong>Aurora</strong><small>DESCANSO & NATURALEZA</small></span>
        </Link>
        <nav className="site-nav" aria-label="Navegación principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/acerca">Acerca</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/reservas" className={({isActive}) => isActive ? "nav-book active" : "nav-book"}>
            Reservas
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
