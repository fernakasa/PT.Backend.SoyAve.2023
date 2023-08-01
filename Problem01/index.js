//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

//? Problema 1
//? Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la
//? multiplicación de los mismos SIN usar el operador de multiplicación *.

//* Función que realiza producto de dos números sin usar el operador de multiplicación (*).
//* @param {number} x - El primer número.
//* @param {number} y - El segundo número.
//* @returns {number} - El resultado de la multiplicación de x e y.
export const productoSinMultiplicar = (x, y) => {
  // Si alguno de los números es cero, el resultado de la multiplicación será cero.
  if (x === 0 || y === 0) {
    return 0;
  }

  // Si el número Y es negativo, podemos cambiar el signo de ambos números para evitar problemas con la iteración.
  if (y < 0) {
    x = -x;
    y = -y;
  }

  // Iteramos y sumamos el número X a sí mismo Y veces para obtener la multiplicación.
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x;
  }

  return result;
}