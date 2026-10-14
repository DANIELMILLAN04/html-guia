# HTTP Messages

HTTP es el protocolo de comunicación entre un cliente, como el navegador, y un servidor. No es HTML, aunque el cuerpo de una respuesta HTTP puede contener HTML.

Una solicitud suele incluir método, ruta, versión, encabezados y, a veces, un cuerpo. La respuesta incluye un código de estado, encabezados y, normalmente, un cuerpo.

```text
GET /inicio HTTP/1.1
Host: ejemplo.test

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<h1>Hola</h1>
```

`200 OK` indica éxito; `404 Not Found` indica que no se encontró el recurso. Los navegadores y servidores intercambian estos mensajes automáticamente; normalmente no necesitas escribirlos a mano al crear una página.
