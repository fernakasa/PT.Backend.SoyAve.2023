//* *************************************************************************************************
//*  Project  :     Prueba técnica
//*  Authores :     Fernando Gustavo Sanchez
//* *************************************************************************************************

function validatePassword() {
  const password = document.getElementById("passwordInput").value;

  // Validations
  const lengthValidation = password.length >= 16;
  const uppercaseValidation = /[A-Z]/.test(password);
  const lowercaseValidation = /[a-z]/.test(password);
  const noConsecutiveLettersValidation = !/(.)\1/.test(password); // Check for consecutive letters
  const numbersValidation = password.replace(/[^0-9]/g, "").length >= 4; // Count numbers, excluding other characters
  const noConsecutiveNumbersValidation = hasConsecutiveNumbers(password); // Check for consecutive numbers
  const specialCharsValidation =
    /(.*[!@#$%^&*_+=?]){2}/.test(password) &&
    !/(.)\1/.test(password.replace(/[!@#$%^&*_+=?]/g, "")); // Check for at least 2 special characters, no consecutive special characters, no repetition of special characters

  // No spaces validation
  const noSpacesValidation = !/\s/.test(password);

  displayValidation("length", lengthValidation);
  displayValidation("uppercase", uppercaseValidation);
  displayValidation("lowercase", lowercaseValidation);
  displayValidation("noConsecutiveLetters", noConsecutiveLettersValidation);
  displayValidation("numbers", numbersValidation);
  displayValidation("noConsecutiveNumbers", noConsecutiveNumbersValidation);
  displayValidation("specialChars", specialCharsValidation);
  displayValidation("noSpaces", noSpacesValidation);
}

function displayValidation(id, isValid) {
  const element = document.getElementById(id);
  element.classList.toggle("text-red-500", !isValid);
  element.classList.toggle("text-green-500", isValid);
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("passwordInput");
  const showPasswordBtn = document.getElementById("showPasswordBtn");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordBtn.textContent = "Ocultar Contraseña";
  } else {
      passwordInput.type = "password";
      showPasswordBtn.textContent = "Mostrar Contraseña";
  }
}

function hasConsecutiveNumbers(password) {
  for (let i = 0; i < password.length - 1; i++) {
      if (/\d/.test(password[i]) && password[i] === password[i + 1]) {
          return false;
      }
  }
  return true;
}