# HTML Audio/Video

`<audio>` y `<video>` incorporan medios. `controls` muestra los controles del navegador; `<source>` ofrece una fuente con su tipo MIME; `poster` puede especificar una imagen previa de vídeo; `<track>` puede añadir subtítulos.

```html
<video controls width="480">
  <source src="clase.mp4" type="video/mp4">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español">
  Tu navegador no admite este vídeo.
</video>
```

JavaScript puede usar métodos como `play()` y `pause()`, y consultar propiedades como `currentTime` y `duration`. Eventos habituales: `play`, `pause`, `ended` y `timeupdate`. Incluye subtítulos o transcripciones cuando sean necesarios y evita reproducir audio automáticamente.
