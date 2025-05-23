// === SELECCIÓN DE ELEMENTOS DEL DOM ===
// Se obtiene el contenedor principal que contiene ambos formularios
const container = document.querySelector(".container");

// Se obtienen los botones que alternan entre los modos de iniciar sesión y registrarse
const sign_in_btn = document.querySelector("#sign-in-btn");   // Botón para iniciar sesión
const sign_up_btn = document.querySelector("#sign-up-btn");   // Botón para registrarse

// Se obtienen los formularios de registro e inicio de sesión
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

// === CAMBIO A MODO "INICIAR SESIÓN" ===
sign_in_btn.addEventListener("click", () => {
    console.log("Click en INICIAR SESIÓN");

    // Se elimina la clase "sign-up-mode" del contenedor para mostrar el formulario de login
    container.classList.remove("sign-up-mode");

    // Limpia los campos de ambos formularios
    clearForm();
});

// === FUNCIÓN PARA LIMPIAR FORMULARIOS ===
function clearForm() {
    // Selecciona todos los campos de texto, email, contraseña y teléfono de ambos formularios
    const inputs = document.querySelectorAll("form input[type='text'], form input[type='email'], form input[type='password'], form input[type='tel']");

    // Recorre cada input y lo limpia estableciendo su valor como vacío
    inputs.forEach(input => {
        input.value = ''; // Elimina cualquier valor escrito anteriormente
    });
}

