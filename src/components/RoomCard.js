import React from "react";
import { money } from "../data/rooms";

function RoomCard({ room, selected, onSelect }) {
  return (
    <article className={`room-card ${selected ? "is-selected" : ""}`}>
      <div className={`room-art ${room.theme}`} aria-hidden="true">
        <span className="room-art-icon">{room.icon}</span>
        <span className="room-art-tag">{room.area} · Hasta {room.capacity} personas</span>
      </div>
      <div className="room-info">
        <p className="eyebrow">{room.kind}</p>
        <h3>{room.name}</h3>
        <p className="room-features">{room.features.join(" · ")}</p>
        <div className="room-bottom">
          <div><strong>{money(room.price)}</strong><small> / noche</small></div>
          <button type="button" className={selected ? "button button-dark" : "button button-outline"} onClick={() => onSelect(room.id)}>
            {selected ? "Seleccionada ✓" : "Elegir habitación"}
          </button>
        </div>
      </div>
    </article>
  );
}
export default RoomCard;
