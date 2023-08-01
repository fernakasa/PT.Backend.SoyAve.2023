//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

// Importamos la función a testear
import { isSecurePassword } from "./index.js";

// Test 1: Verificar que la función devuelva true para una contraseña segura
test("Debería devolver true para una contraseña segura", () => {
  const securePassword = "Abcd123!@Efgh";
  expect(isSecurePassword(securePassword)).toBe(true);
});

// Test 2: Verificar que la función devuelva false para una contraseña insegura
test("Debería devolver false para una contraseña insegura", () => {
  const insecurePassword = "abcd1234";
  expect(isSecurePassword(insecurePassword)).toBe(false);
});

// Test 3: Verificar que la función devuelva false para una contraseña con menos de 16 caracteres
test("Debería devolver false para una contraseña con menos de 16 caracteres", () => {
  const shortPassword = "Abc123!@Ef";
  expect(isSecurePassword(shortPassword)).toBe(false);
});

// Test 4: Verificar que la función devuelva false para una contraseña sin caracteres especiales
test("Debería devolver false para una contraseña sin caracteres especiales", () => {
  const noSpecialCharPassword = "Abcdefgh1234";
  expect(isSecurePassword(noSpecialCharPassword)).toBe(false);
});

