# 4. HTML Media

Los elementos multimedia muestran audio y vídeo directamente en el navegador. Proporciona controles y alternativas comprensibles. Los archivos de este repositorio no incluyen medios; cambia sus rutas por archivos propios.

## Vídeo

`<video controls>` crea un reproductor con controles del navegador. `<source>` declara el archivo y su tipo MIME. Puedes añadir varias fuentes para ofrecer formatos alternativos. Para accesibilidad, proporciona subtítulos con `<track>` cuando estén disponibles.

## Audio

`<audio controls>` reproduce sonido. Añade texto alternativo entre las etiquetas por si el navegador no admite el elemento. Evita iniciar audio automáticamente.

## YouTube e iframes

Un vídeo externo se incrusta con `<iframe>` usando la URL de inserción del proveedor. El contenido sigue alojado en ese servicio. Incluye `title` descriptivo y usa solo proveedores de confianza.

## Plug-ins

Los plug-ins eran complementos externos para el navegador. Muchos métodos antiguos han quedado obsoletos; para la web moderna se prefieren `<audio>`, `<video>`, SVG y otras capacidades estándar.

Consulta [`media.html`](media.html) para los ejemplos locales y [`youtube.html`](youtube.html) para una plantilla de inserción. Sustituye los archivos y el ID de vídeo de muestra.
