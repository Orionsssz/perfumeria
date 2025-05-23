// === SELECCI�N DE ELEMENTOS DEL DOM ===
// Se obtiene el contenedor principal que contiene ambos formularios
const container = document.querySelector(".container");

// Se obtienen los botones que alternan entre los modos de iniciar sesi�n y registrarse
const sign_in_btn = document.querySelector("#sign-in-btn");   // Bot�n para iniciar sesi�n
const sign_up_btn = document.querySelector("#sign-up-btn");   // Bot�n para registrarse

// Se obtienen los formularios de registro e inicio de sesi�n
const sign_up_form = document.querySelector(".sign-up-form");
const sign_in_form = document.querySelector(".sign-in-form");

// === CAMBIO A MODO "REGISTRARSE" ===
sign_up_btn.addEventListener("click", () => {
    console.log("Click en REGISTRARSE");

    // Se agrega la clase "sign-up-mode" al contenedor para mostrar el formulario de registro
    container.classList.add("sign-up-mode");

    // Limpia los campos de ambos formularios para evitar que queden datos anteriores
    clearForm();
});

// === CAMBIO A MODO "INICIAR SESI�N" ===
sign_in_btn.addEventListener("click", () => {
    console.log("Click en INICIAR SESI�N");

    // Se elimina la clase "sign-up-mode" del contenedor para mostrar el formulario de login
    container.classList.remove("sign-up-mode");

    // Limpia los campos de ambos formularios
    clearForm();
});

// === FUNCI�N PARA LIMPIAR FORMULARIOS ===
function clearForm() {
    // Selecciona todos los campos de texto, email, contrase�a y tel�fono de ambos formularios
    const inputs = document.querySelectorAll("form input[type='text'], form input[type='email'], form input[type='password'], form input[type='tel']");

    // Recorre cada input y lo limpia estableciendo su valor como vac�o
    inputs.forEach(input => {
        input.value = ''; // Elimina cualquier valor escrito anteriormente
    });
}

