# HTML Canvas

`<canvas>` reserva una superficie de dibujo; JavaScript pinta en ella. El contexto 2D ofrece métodos como `fillRect`, `strokeRect`, `beginPath`, `arc`, `lineTo` y `fillText`.

```html
<canvas id="dibujo" width="180" height="100">
  Un rectángulo azul.
</canvas>
<script>
  const contexto = document.getElementById("dibujo").getContext("2d");
  contexto.fillStyle = "blue";
  contexto.fillRect(10, 10, 100, 60);
</script>
```

`fillStyle` configura el relleno y `fillRect(x, y, ancho, alto)` dibuja el rectángulo. El contenido dibujado no se expone como elementos individuales del DOM; proporciona una alternativa textual o semántica cuando el gráfico comunique información.
