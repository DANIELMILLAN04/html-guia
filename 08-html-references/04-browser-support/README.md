# HTML Browser Support

La compatibilidad con navegadores indica qué navegadores y versiones admiten un elemento o una API. Una característica nueva puede no estar disponible en versiones antiguas o en todos los dispositivos.

Comprueba la compatibilidad de las funciones importantes antes de depender de ellas. Para APIs, detecta su disponibilidad y ofrece una alternativa:

```js
if ("geolocation" in navigator) {
  // La API existe; aún puede requerir permiso y contexto seguro.
} else {
  console.log("La geolocalización no está disponible.");
}
```

La comprobación no garantiza autorización ni éxito. Revisa también los errores y diseña una experiencia útil cuando la API no esté disponible. Las tablas de compatibilidad cambian con el tiempo, así que consulta fuentes actualizadas.
