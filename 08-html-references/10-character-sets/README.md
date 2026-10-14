# HTML Character Sets

La codificación de caracteres determina cómo se representan letras, acentos y símbolos. En HTML moderno se recomienda UTF-8.

```html
<head>
  <meta charset="UTF-8">
</head>
```

Guarda también el archivo con codificación UTF-8 en el editor. Si el archivo y la declaración no coinciden, caracteres como `ñ` o `á` pueden mostrarse incorrectamente. La declaración `meta` debe aparecer al principio de `<head>`.
