# HTML Events

Un evento representa algo que ocurre en el navegador, como pulsar un botón, escribir en un campo o enviar un formulario. JavaScript puede escuchar ese evento y responder.

```html
<button id="boton">Pulsar</button>
<p id="salida" aria-live="polite"></p>
<script>
  document.getElementById("boton").addEventListener("click", () => {
    document.getElementById("salida").textContent = "Se hizo clic.";
  });
</script>
```

`click` es el nombre del evento; `addEventListener` conecta el evento con una función. Otros eventos habituales son `input`, `change`, `submit`, `keydown` y `load`. Es preferible conectar eventos desde JavaScript en vez de añadir atributos `onclick` al HTML.
