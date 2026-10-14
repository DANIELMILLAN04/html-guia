# 2. HTML Forms

Los formularios recogen datos. HTML muestra los controles y puede hacer comprobaciones básicas en el navegador; el servidor debe validar de nuevo todo dato recibido.

## Formulario y envío

`<form>` agrupa controles. `action` indica la ruta que recibe los datos; `method="get"` suele servir para búsquedas cuyos valores pueden estar en la URL. `method="post"` envía los datos en el cuerpo de la solicitud, pero no los cifra: para protegerlos se necesita HTTPS y un servidor seguro.

Cada control que se enviará necesita `name`. Asocia siempre un `<label>` con el `id` del campo: mejora la accesibilidad y amplía el área clicable.

## Controles y atributos

- `<input>` crea controles; su `type` decide si es texto, correo, número, fecha, casilla, radio o archivo, entre otros.
- `<select>` con `<option>` crea un menú; `<textarea>` acepta varias líneas.
- `<button type="submit">` envía el formulario; `type="button"` no lo envía automáticamente.
- `required`, `min`, `max`, `minlength`, `maxlength` y `pattern` pueden imponer restricciones básicas.
- `placeholder` es una pista, no reemplaza a `<label>`.
- `fieldset` y `legend` agrupan controles relacionados.

## Ejemplo ejecutable

Abre [`formulario.html`](formulario.html). Al enviarlo, el ejemplo demuestra una solicitud GET local del navegador; no guarda ni procesa datos en un servidor.

```html
<label for="correo">Correo electrónico:</label>
<input id="correo" name="correo" type="email" required>
```

`type="email"` habilita el teclado adecuado en algunos dispositivos y una validación de formato sencilla. No garantiza que la dirección exista ni sustituye la validación del servidor.

## Privacidad y seguridad

No incluyas contraseñas en parámetros GET porque la URL puede quedar en el historial o en registros. No confíes en la validación del navegador: cualquiera puede modificar la solicitud. No uses `disabled` si necesitas que el valor se envíe; los controles deshabilitados normalmente se omiten.
