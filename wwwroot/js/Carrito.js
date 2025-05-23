// === FUNCIÓN PARA MOSTRAR UNA SECCIÓN ESPECÍFICA Y OCULTAR LAS DEMÁS ===
function mostrarParte(id) {
    // Oculta todas las secciones quitando la clase 'active'
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Busca la sección con el ID dado y la muestra añadiendo la clase 'active'
    const objetivo = document.getElementById(id);
    if (objetivo) {
        objetivo.classList.add('active');
    }
}

// === FUNCIÓN PARA AVANZAR AL PAGO SOLO SI ALGÚN PRODUCTO FUE SELECCIONADO ===
function procederAlPago() {
    // Convierte todos los checkboxes a un array y verifica si al menos uno está marcado
    const algunoSeleccionado = [...document.querySelectorAll('.checkbox')].some(cb => cb.checked);

    // Si hay al menos un producto seleccionado, avanza a la parte 2 (pago)
    if (algunoSeleccionado) {
        mostrarParte('parte2');
    }
}

// === FUNCIÓN PARA VALIDAR QUE SE HAYA SELECCIONADO UN MÉTODO DE PAGO ===
function validarPago() {
    // Verifica si hay un input de tipo radio (para método de pago) seleccionado
    const metodoSeleccionado = document.querySelector('input[name="payment-method"]:checked');

    // Si no se seleccionó ningún método de pago, muestra una alerta y detiene la función
    if (!metodoSeleccionado) {
        alert("Por favor selecciona un método de pago.");
        return;
    }

    // Si se seleccionó, avanza a la parte 4 (datos de la tarjeta)
    mostrarParte('parte4');
}

// === FUNCIÓN PARA MOSTRAR MENSAJE DE ÉXITO Y OCULTAR TODAS LAS SECCIONES ===
/*function mostrarExito() {
    // Oculta todas las secciones activas
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Muestra el mensaje de éxito final (por ejemplo, "Compra realizada con éxito")
    document.getElementById('mensaje-exito').style.display = 'block';
}*/



