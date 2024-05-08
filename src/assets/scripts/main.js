/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * document.getElementById("submitButton").addEventListener("click", function(event) {
  // Evita que el formulario se envíe automáticamente
  event.preventDefault();

  var checkbox = document.getElementById("check");
  var phoneNumberInput = document.getElementById("tlf");
  var nameInput = document.getElementById("Name");
  var surNameInput = document.getElementById("surName");
  var emailInput = document.getElementById("email");

  // Validación del checkbox de términos y condiciones
  if (!checkbox.checked) {
    alert("Por favor, acepta los términos y condiciones.");
    return;
  }

  // Validación del campo de teléfono
  var phoneNumber = phoneNumberInput.value.trim();
  if (!/^\d+$/.test(phoneNumber)) {
    alert("El número de teléfono debe contener solo números.");
    return;
  }

  // Validación del campo de nombre
  var name = nameInput.value.trim();
  if (name === "") {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  // Validación del campo de apellidos
  var surName = surNameInput.value.trim();
  if (surName === "") {
    alert("Por favor, ingresa tus apellidos.");
    return;
  }

  // Validación del campo de correo electrónico
  var email = emailInput.value.trim();
  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return;
  }

  // Aquí puedes agregar más validaciones si es necesario

  // Si todas las validaciones son exitosas, puedes enviar el formulario
  document.getElementById("form").submit();
});

 */




