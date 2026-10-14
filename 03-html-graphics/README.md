# 3. HTML Graphics

HTML permite incluir dos tipos de gráficos vectoriales o dibujados: Canvas y SVG.

## Canvas

`<canvas>` reserva un área de dibujo. JavaScript obtiene un contexto y dibuja píxeles en él. Es útil para animaciones, juegos y gráficos que cambian con frecuencia. El dibujo no forma elementos HTML independientes, por lo que conviene ofrecer una alternativa accesible cuando comunique información.

En [`canvas.html`](canvas.html), `getContext("2d")` obtiene las operaciones 2D, `fillStyle` establece el color y `fillRect(x, y, ancho, alto)` dibuja un rectángulo.

## SVG

SVG describe formas vectoriales mediante elementos como `<circle>`, `<rect>` y `<line>`. Puede ampliarse sin perder nitidez; sus formas forman parte del documento y pueden recibir estilos. Es apropiado para iconos, diagramas e ilustraciones.

En [`svg.html`](svg.html), `viewBox` define el sistema de coordenadas, `cx` y `cy` la posición del centro y `r` el radio del círculo. El ejemplo utiliza `role="img"` y `<title>` para proporcionar un nombre accesible.

## ¿Cuál elegir?

Elige SVG para gráficos escalables con formas identificables. Elige Canvas para dibujar muchas formas o actualizar una superficie rápidamente con JavaScript. Ninguno reemplaza al HTML semántico para contenido textual normal.
