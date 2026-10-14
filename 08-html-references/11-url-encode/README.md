# HTML URL Encode

La codificación de URL representa caracteres especiales mediante `%` y su valor hexadecimal. Un espacio se puede representar como `%20`; en datos de formularios codificados como `application/x-www-form-urlencoded`, los espacios suelen representarse como `+`.

Para codificar un valor en JavaScript:

```js
const consulta = encodeURIComponent("perros y gatos");
console.log(consulta); // perros%20y%20gatos
```

Codifica cada valor de parámetro, no la URL entera: `?`, `&` y `=` separan partes de la consulta y deben conservar su función. `decodeURIComponent()` permite decodificar un componente codificado.
