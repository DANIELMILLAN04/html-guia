self.addEventListener("message", event => {
  const limite = Number(event.data);
  if (!Number.isSafeInteger(limite) || limite < 0) {
    self.postMessage("El valor recibido no es válido.");
    return;
  }

  let suma = 0;
  for (let i = 1; i <= limite; i += 1) suma += i;
  self.postMessage(`La suma de 1 a ${limite} es ${suma}.`);
});
