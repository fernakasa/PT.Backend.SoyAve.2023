//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

//? Problema 3
//? Se desea crear un validador para la contraseña de un sitio web, pero esta debe ser muy
//? segura, para ello el cliente solicita los siguientes requerimientos para el password:
//?     ● Debe tener al menos 16 caracteres.
//?     ● Debe tener letras minúsculas y mayúsculas.
//?     ● No puede tener 2 letras iguales consecutivas.
//?     ● Debe contener al menos 4 números.
//?     ● No puede tener 2 números iguales consecutivos.
//?     ● Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
//?       ellos puede repetirse en ninguna posición y además los caracteres no pueden
//?       estar juntos.
//?     ● No se puede usar el número 0.
//?     ● No se puede colocar espacios.
//? Nota: No debe usar expresión regular.

//* Valida si una contraseña cumple con los requerimientos de seguridad.
//* @param {string} password - La contraseña a validar.
//* @returns {boolean} true si la contraseña es segura, false en caso contrario.
export const isSecurePassword = (password) => {
  // Requerimiento 1: Debe tener al menos 16 caracteres.
  if (password.length < 16) {
    return false;
  }

  // Requerimiento 2: Debe tener letras minúsculas y mayúsculas.
  let hasLowerCase = false;
  let hasUpperCase = false;
  for (let char of password) {
    if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
    }
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true;
    }
  }
  if (!hasLowerCase || !hasUpperCase) {
    return false;
  }

  // Requerimiento 3: No puede tener 2 letras iguales consecutivas.
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1] && (password[i] >= 'a' && password[i] <= 'z' || password[i] >= 'A' && password[i] <= 'Z')) {
      return false;
    }
  }

  // Requerimiento 4: Debe contener al menos 4 números.
  let numCount = 0;
  for (let char of password) {
    if (char >= '0' && char <= '9') {
      numCount++;
    }
  }
  if (numCount < 4) {
    return false;
  }

  // Requerimiento 5: No puede tener 2 números iguales consecutivos.
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1] && password[i] >= '0' && password[i] <= '9') {
      return false;
    }
  }

  // Requerimiento 6: Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?)
  const specialCharacters = new Set("!@#$%ˆ&*-_+=?");
  let specialCount = 0;
  for (let char of password) {
    if (specialCharacters.has(char)) {
      specialCount++;
    }
  }
  if (specialCount < 2) {
    return false;
  }

  // Requerimiento 7: Los caracteres especiales no pueden repetirse en ninguna posición.
  for (let char of specialCharacters) {
    let count = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === char) {
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
  }

  // Requerimiento 8: Los caracteres especiales no pueden estar juntos.
  for (let i = 0; i < password.length - 1; i++) {
    if (specialCharacters.has(password[i]) && specialCharacters.has(password[i + 1])) {
      return false;
    }
  }

  // Requerimiento 9: No se puede usar el número 0.
  if (password.includes('0')) {
    return false;
  }

  // Requerimiento 10: No se puede colocar espacios.
  if (password.includes(' ')) {
    return false;
  }

  // Si todos los requerimientos se cumplen, la contraseña es segura.
  return true;
}

// Ejemplo de uso:
const passwordExample = "Abcd123!@Efgh";
if (isSecurePassword(passwordExample)) {
  console.log("La contraseña es segura.");
} else {
  console.log("La contraseña no cumple con los requerimientos de seguridad.");
}
