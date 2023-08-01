//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

//* Unit Test Función que realiza producto de dos números sin usar el operador de multiplicación (*).
import { productoSinMultiplicar } from "./index.js";

describe("Pruebas de productoSinMultiplicar", () => {
  it("Caso 1: Multiplicación de -1 y 5", () => {
    expect(productoSinMultiplicar(-1, 5)).toBe(-5);
  });

  it("Caso 2: Multiplicación de 5 y 5", () => {
    expect(productoSinMultiplicar(5, 5)).toBe(25);
  });

  it("Caso 3: Multiplicación de 3 y -4", () => {
    expect(productoSinMultiplicar(3, -4)).toBe(-12);
  });

  it("Caso 4: Multiplicación de -2 y -2", () => {
    expect(productoSinMultiplicar(-2, -2)).toBe(4);
  });
});