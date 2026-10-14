# HTTP Methods

Un método HTTP indica qué operación solicita el cliente. No es una etiqueta HTML, aunque los formularios y las APIs lo utilizan.

- `GET` solicita datos; los parámetros de búsqueda suelen aparecer en la URL.
- `POST` envía datos en el cuerpo de la solicitud, a menudo para crear o procesar información.
- `PUT` suele reemplazar un recurso.
- `PATCH` suele modificar parte de un recurso.
- `DELETE` solicita eliminar un recurso.

```html
<form action="/buscar" method="get">
  <label for="q">Buscar:</label>
  <input id="q" name="q">
  <button type="submit">Buscar</button>
</form>
```

Los formularios HTML admiten normalmente `get` y `post`. POST no cifra los datos: para protegerlos hace falta HTTPS y procesamiento seguro en el servidor. Evita enviar contraseñas en la URL mediante GET.
