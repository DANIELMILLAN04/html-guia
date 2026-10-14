# PX to EM Converter

`px` y `em` son unidades CSS, no atributos HTML. Un conversor calcula una equivalencia según un tamaño de referencia:

```text
em = píxeles / tamaño de referencia en píxeles
```

Con una referencia de `16px`, `32px` equivalen a `2em`.

```css
html { font-size: 16px; }
h1 { font-size: 2em; } /* 32px con la referencia indicada */
```

`em` depende del tamaño de fuente calculado en su contexto; al anidar elementos los valores pueden acumularse. Por eso, confirma qué referencia utiliza el conversor y prueba el resultado en la estructura real de la página.
