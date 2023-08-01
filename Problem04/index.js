//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

//? Problema 4
//? Dado un arreglo de números (cualquiera) sacar la siguiente información:
//? ● Cantidad de elementos del arreglo.
//? ● Porcentaje de números pares e impares.
//? ● Porcentaje de números mayores a 1000.
//? ● Cuál es el mayor y menor valor.
//? ● Asuma los siguientes indicadores: Tome en cuenta que el mayor número
//? representa el 100%, indique cual es el porcentaje del número mínimo y el
//? porcentaje del promedio de todos los números.

//* Función para calcular información sobre un arreglo de números.
//* @param {number[]} arreglo - El arreglo de números del que se calculará la información.
//* @returns {Object} - Un objeto que contiene la información calculada:
//*  - cantidad_elementos: Cantidad de elementos del arreglo.
//*  - porcentaje_pares: Porcentaje de números pares en el arreglo.
//*  - porcentaje_impares: Porcentaje de números impares en el arreglo.
//*  - porcentaje_mayores_1000: Porcentaje de números mayores a 1000 en el arreglo.
//*  - mayor_valor: El valor más grande presente en el arreglo.
//*  - menor_valor: El valor más pequeño presente en el arreglo.
//*  - porcentaje_minimo: Porcentaje del valor más pequeño con respecto al valor más grande.
//*  - porcentaje_promedio: Porcentaje del promedio de todos los números con respecto al valor más grande.
export const calcular_informacion_arreglo = (arreglo) => {
  // Cantidad de elementos del arreglo
  const cantidad_elementos = arreglo.length;

  // Porcentaje de números pares e impares
  const cantidad_pares = arreglo.filter((num) => num % 2 === 0).length;
  const porcentaje_pares = (cantidad_pares / cantidad_elementos) * 100;
  const porcentaje_impares = 100 - porcentaje_pares;

  // Porcentaje de números mayores a 1000
  const cantidad_mayores_1000 = arreglo.filter((num) => num > 1000).length;
  const porcentaje_mayores_1000 =
    (cantidad_mayores_1000 / cantidad_elementos) * 100;

  // Mayor y menor valor del arreglo
  const mayor_valor = Math.max(...arreglo);
  const menor_valor = Math.min(...arreglo);

  // Porcentaje del número mínimo y promedio de todos los números
  const porcentaje_minimo = (menor_valor / mayor_valor) * 100;
  const promedio =
    arreglo.reduce((sum, num) => sum + num, 0) / cantidad_elementos;
  const porcentaje_promedio = (promedio / mayor_valor) * 100;

  return {
    cantidad_elementos,
    porcentaje_pares,
    porcentaje_impares,
    porcentaje_mayores_1000,
    mayor_valor,
    menor_valor,
    porcentaje_minimo,
    porcentaje_promedio,
  };
};
