# 5. Web APIs

Las Web APIs son interfaces que el navegador ofrece a JavaScript. No son etiquetas HTML. Algunas requieren permiso, HTTPS o un servidor; comprueba errores y ofrece alternativas si una función no está disponible.

## Geolocalización

La API de geolocalización solicita permiso para acceder a la ubicación. Consulta [`geolocation.html`](geolocation.html). Úsala solo con una finalidad clara y no publiques ni envíes coordenadas sin necesidad.

## Arrastrar y soltar

La Drag and Drop API permite arrastrar un elemento y soltarlo en una zona. Consulta [`drag-drop.html`](drag-drop.html): el evento `dragstart` identifica el elemento y `drop` lo recibe.

## Popover

La Popover API permite mostrar contenido emergente con atributos HTML. [`popover.html`](popover.html) usa `popover` y `popovertarget`; los navegadores compatibles controlan su apertura y cierre.

## Web Storage

`localStorage` conserva valores entre sesiones; `sessionStorage` los conserva durante la sesión de una pestaña. [`storage.html`](storage.html) muestra el uso básico. No guardes contraseñas ni secretos: el almacenamiento del navegador no es un almacén seguro.

## Web Workers

Un Worker ejecuta JavaScript en un hilo de trabajo para no bloquear la interfaz. Se comunica mediante mensajes y no manipula directamente el DOM. Abre [`worker.html`](worker.html) servido desde un servidor local y mantén `worker.js` en la misma carpeta.

## Server-Sent Events

SSE permite que un servidor envíe actualizaciones a una página a través de una conexión duradera. El ejemplo [`sse.js`](sse.js) solo muestra el cliente: necesita un servidor en `/events` que responda con el formato Event Stream y el tipo MIME correspondiente.
