# 1. HTML Tutorial

HTML (HyperText Markup Language) es un lenguaje de marcado que describe la estructura y el significado del contenido de una página. Sus elementos se escriben mediante etiquetas. HTML no sustituye a CSS, que controla la presentación, ni a JavaScript, que implementa comportamiento.

## Estructura mínima

Abre [`ejemplo.html`](ejemplo.html) en un navegador. La declaración `<!DOCTYPE html>` selecciona el modo estándar de HTML moderno. `<html>` contiene el documento; `<head>` guarda metadatos y recursos; `<body>` contiene el contenido visible. `lang="es"` declara el idioma y la etiqueta `meta` establece UTF-8.

## Elementos y atributos

Un elemento suele constar de etiqueta de apertura, contenido y etiqueta de cierre, por ejemplo `<p>Texto</p>`. Los elementos vacíos, como `<img>` y `<br>`, no envuelven contenido. Los atributos aportan datos: `href` señala el destino de un enlace; `src`, el recurso de una imagen; `alt`, su alternativa textual.

## Texto y jerarquía

Usa encabezados `<h1>` a `<h6>` para organizar secciones, no solo para cambiar el tamaño de letra. `<p>` crea párrafos; `<strong>` marca importancia; `<em>` marca énfasis; `<blockquote>` representa una cita extensa. `<br>` introduce un salto de línea y `<hr>` una separación temática. Los comentarios `<!-- ... -->` no se muestran como contenido.

## Enlaces, imágenes y listas

`<a href="...">` crea un enlace. Un `id` permite enlazar a una sección con `href="#id"`. `<img>` incluye imágenes y debe tener un `alt` útil (o vacío si es puramente decorativa). `<ul>` crea listas con viñetas, `<ol>` listas ordenadas y `<li>` cada elemento; `<dl>`, `<dt>` y `<dd>` representan términos y descripciones.

## Tablas y formularios

Usa `<table>` para datos tabulares: `<tr>` es una fila, `<th>` una celda de encabezado y `<td>` una celda de datos. No uses tablas para maquetar. Los formularios emplean `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>` y `<button>`; se explican con más detalle en [HTML Forms](../02-html-forms/README.md).

## Organización y semántica

`<div>` y `<span>` son contenedores genéricos. Cuando corresponda, prefiere etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`: describen la función de cada zona y facilitan la navegación asistida.

## CSS, JavaScript y metadatos

Conecta una hoja CSS mediante `<link rel="stylesheet" href="estilos.css">` y JavaScript mediante `<script src="app.js" defer></script>`. `<title>` define el título de la pestaña. `<meta name="viewport" content="width=device-width, initial-scale=1">` ayuda a adaptar la página a móviles. Las rutas de recursos pueden ser relativas (`imagenes/foto.jpg`) o absolutas.

## Otros elementos útiles

- `<code>` marca código en línea y `<pre>` conserva espacios y saltos de línea.
- `<iframe>` incrusta otro documento; úsalo con fuentes de confianza y un `title` descriptivo.
- `<picture>` permite seleccionar imágenes alternativas para distintas condiciones.
- `<div class="...">` agrupa elementos para estilos; `id` debe ser único en el documento.
- Caracteres especiales pueden escribirse como entidades, por ejemplo `&lt;` para `<` y `&amp;` para `&`.
- Los colores, tamaños y diseños se definen normalmente con CSS, no mediante etiquetas especiales de HTML.

## Ejemplo

Consulta [`ejemplo.html`](ejemplo.html): contiene una cabecera, navegación, contenido principal, enlace interno, imagen de muestra, lista y pie de página. Sustituye `src` por una imagen tuya para verla.

## Buenas prácticas

Anida las etiquetas correctamente, usa minúsculas, pon comillas en los valores de atributos, escribe un `alt` adecuado para cada imagen informativa y mantén una jerarquía lógica de encabezados. Para conocer los atributos comunes, consulta [HTML Attributes](../08-html-references/02-html-attributes/README.md) y [Global Attributes](../08-html-references/03-global-attributes/README.md).
