const eventos = new EventSource("/events");

eventos.addEventListener("message", evento => {
  console.log("Actualización recibida:", evento.data);
});

eventos.addEventListener("error", () => {
  console.error("La conexión de eventos se interrumpió o no está disponible.");
});
