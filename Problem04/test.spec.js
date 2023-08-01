//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

//* Unit test para la función calcular_informacion_arreglo
import { calcular_informacion_arreglo } from "./index.js";

test("Calcula la información del arreglo correctamente", () => {
  // Arreglo de ejemplo para la prueba
  const arreglo_ejemplo = [10, 25, 400, 1200, 800, 1500, 600];
  const informacion_arreglo = calcular_informacion_arreglo(arreglo_ejemplo);

  // Comprobamos los resultados con expectativas (assertions)
  expect(informacion_arreglo.cantidad_elementos).toBe(7);
  expect(informacion_arreglo.porcentaje_pares).toBe(85.71428571428571);
  expect(informacion_arreglo.porcentaje_impares).toBe(14.285714285714292);
  expect(informacion_arreglo.porcentaje_mayores_1000).toBe(28.57142857142857);
  expect(informacion_arreglo.mayor_valor).toBe(1500);
  expect(informacion_arreglo.menor_valor).toBe(10);
  expect(informacion_arreglo.porcentaje_minimo).toBe(0.6666666666666667);
  expect(informacion_arreglo.porcentaje_promedio).toBe(43.19047619047619);
});
