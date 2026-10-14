# HTML Global Attributes

Los atributos globales se pueden usar en muchos tipos de elementos HTML:

- `id` identifica un elemento de forma única dentro del documento.
- `class` asigna una o varias clases para CSS o JavaScript.
- `lang` declara el idioma del contenido.
- `title` añade información complementaria.
- `hidden` indica que el elemento no debe presentarse.
- `dir` indica la dirección del texto, por ejemplo `ltr` o `rtl`.

```html
<p id="introduccion" class="destacado" lang="es" title="Inicio del tema">
  Contenido introductorio.
</p>
<p hidden>Contenido oculto.</p>
```

`id` debe ser único. `class` se puede repetir en varios elementos. No confíes en `title` para información esencial, pues su disponibilidad depende del dispositivo y la forma de interacción.
