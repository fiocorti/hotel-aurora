const rooms = [
  {
    id: 1,
    name: "Habitación Estándar",
    kind: "La esencial",
    price: 75000,
    capacity: 2,
    area: "22 m²",
    icon: "🛏️",
    theme: "room-sage",
    features: ["Cama doble", "Wi-Fi", "Baño privado"]
  },
  {
    id: 2,
    name: "Doble Superior",
    kind: "Más comodidad",
    price: 108000,
    capacity: 2,
    area: "30 m²",
    icon: "☀️",
    theme: "room-sand",
    features: ["Vista al jardín", "Desayuno", "Aire acondicionado"]
  },
  {
    id: 3,
    name: "Habitación Familiar",
    kind: "Para compartir",
    price: 145000,
    capacity: 4,
    area: "42 m²",
    icon: "🌿",
    theme: "room-blue",
    features: ["Hasta 4 huéspedes", "Dos ambientes", "Smart TV"]
  },
  {
    id: 4,
    name: "Suite Aurora",
    kind: "Nuestra favorita",
    price: 210000,
    capacity: 2,
    area: "55 m²",
    icon: "✨",
    theme: "room-rose",
    features: ["Sala de estar", "Balcón privado", "Bañera"]
  }
];

export const money = (value) => new Intl.NumberFormat("es-AR", {
  style: "currency", currency: "ARS", maximumFractionDigits: 0
}).format(value);

export default rooms;
