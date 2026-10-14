# HTML Attributes

Un atributo aporta información o configuración a un elemento HTML. Se escribe normalmente en la etiqueta de apertura como `nombre="valor"`. La referencia de atributos permite comprobar cuáles acepta cada elemento.

```html
<a href="https://example.com" target="_blank" rel="noopener">
  Abrir ejemplo
</a>
<img src="paisaje.jpg" alt="Montañas junto a un lago">
```

En el enlace, `href` indica el destino, `target` solicita abrir una pestaña nueva y `rel="noopener"` evita que la página nueva controle la anterior. En la imagen, `src` es la ruta y `alt` su alternativa textual.

Los atributos no son intercambiables: `href` corresponde, entre otros, a `<a>`; `src`, a imágenes y recursos; `alt`, a imágenes. Usa solo atributos válidos para cada elemento y valores entre comillas.
