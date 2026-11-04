import React, { useState } from "react";
import RoomCard from "../components/RoomCard";
import rooms, { money } from "../data/rooms";

function localDateISO() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Booking() {
  const [roomId, setRoomId] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", checkIn: "", checkOut: "", guests: 1 });
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const room = rooms.find((item) => item.id === roomId);
  const today = localDateISO();
  const nights = form.checkIn && form.checkOut
    ? Math.max(0, Math.round((Date.parse(form.checkOut) - Date.parse(form.checkIn)) / 86400000))
    : 0;
  const total = nights * room.price;

  function chooseRoom(id) {
    setRoomId(id);
    setError("");
    setConfirmation(null);
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((old) => ({ ...old, [name]: name === "guests" ? Number(value) : value }));
    setError("");
    setConfirmation(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.checkIn || !form.checkOut || form.checkIn < today || nights < 1) {
      setError("Ingresá fechas válidas: la salida debe ser posterior a la entrada.");
      return;
    }
    if (form.guests < 1 || form.guests > room.capacity) {
      setError(`Esta habitación admite de 1 a ${room.capacity} huéspedes.`);
      return;
    }
    setConfirmation({ room: room.name, name: form.name, checkIn: form.checkIn, checkOut: form.checkOut, nights, total });
    setError("");
  }

  return (
    <section className="container page-section">
      <div className="page-intro"><p className="eyebrow">TU PRÓXIMA ESTADÍA</p><h1>Habitaciones y reservas</h1><p>Descubrí nuestras cuatro categorías. Los precios son ilustrativos y no hay reservas reales.</p></div>
      <div className="rooms-grid">
        {rooms.map((item) => <RoomCard key={item.id} room={item} selected={roomId === item.id} onSelect={chooseRoom} />)}
      </div>
      <div id="booking-form" className="booking-layout">
        <form className="form-card booking-form" onSubmit={handleSubmit}>
          <p className="eyebrow">PASO FINAL</p><h2>Solicitar reserva de prueba</h2>
          <p>Habitación elegida: <strong>{room.name}</strong></p>
          <label htmlFor="booking-name">Nombre completo</label>
          <input id="booking-name" name="name" value={form.name} onChange={handleChange} placeholder="Nombre y apellido" required />
          <label htmlFor="booking-email">Correo electrónico</label>
          <input id="booking-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tunombre@correo.com" required />
          <div className="form-row">
            <div><label htmlFor="checkIn">Entrada</label><input id="checkIn" name="checkIn" type="date" min={today} value={form.checkIn} onChange={handleChange} required /></div>
            <div><label htmlFor="checkOut">Salida</label><input id="checkOut" name="checkOut" type="date" min={form.checkIn || today} value={form.checkOut} onChange={handleChange} required /></div>
          </div>
          <label htmlFor="guests">Cantidad de huéspedes (máximo {room.capacity})</label>
          <input id="guests" name="guests" type="number" min="1" max={room.capacity} value={form.guests} onChange={handleChange} required />
          {error && <p className="error-message" role="alert">{error}</p>}
          <button className="button button-primary" type="submit">Confirmar simulación</button>
          <p className="form-disclaimer">Solo demostración. No se procesa ningún pago ni se guardan datos en un servidor.</p>
        </form>
        <aside className="summary-card">
          <p className="eyebrow">RESUMEN</p><h3>{room.name}</h3>
          <div className="summary-row"><span>Precio por noche</span><strong>{money(room.price)}</strong></div>
          <div className="summary-row"><span>Noches</span><strong>{nights}</strong></div>
          <div className="summary-total"><span>Total estimado</span><strong>{money(total)}</strong></div>
          <p>Los importes son ficticios y se muestran en pesos argentinos (ARS).</p>
          {confirmation && <div className="success-message" role="status"><strong>¡Simulación confirmada!</strong><p>{confirmation.name}: {confirmation.room}, desde {confirmation.checkIn} hasta {confirmation.checkOut} ({confirmation.nights} noche/s). Total: {money(confirmation.total)}.</p><small>No se realizó una reserva real.</small></div>}
        </aside>
      </div>
    </section>
  );
}
export default Booking;
