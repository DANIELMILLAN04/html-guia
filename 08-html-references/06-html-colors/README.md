# HTML Colors

Los colores se expresan normalmente mediante CSS. HTML no necesita una etiqueta especial para cambiar el color.

```html
<p style="color: navy;">Nombre de color</p>
<p style="color: #145da0;">HEX</p>
<p style="color: rgb(20, 93, 160);">RGB</p>
<p style="color: hsl(210, 78%, 35%);">HSL</p>
```

- Los **nombres** (`navy`, `tomato`) son fáciles de leer, pero ofrecen una selección limitada.
- **HEX** usa `#RRGGBB`; cada par define rojo, verde y azul.
- **RGB** define esos canales con valores habitualmente entre 0 y 255.
- **HSL** usa tono en grados, saturación y luminosidad como porcentajes.
- `rgba()` y la sintaxis moderna de `rgb()` pueden expresar transparencia.

Para una web real, define los colores en una hoja CSS en vez de repetir estilos en línea. Comprueba el contraste entre texto y fondo para que el contenido sea legible.
