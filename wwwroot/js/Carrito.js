// === FUNCI�N PARA MOSTRAR UNA SECCI�N ESPEC�FICA Y OCULTAR LAS DEM�S ===
function mostrarParte(id) {
    // Oculta todas las secciones quitando la clase 'active'
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Busca la secci�n con el ID dado y la muestra a�adiendo la clase 'active'
    const objetivo = document.getElementById(id);
    if (objetivo) {
        objetivo.classList.add('active');
    }
}

// === FUNCI�N PARA AVANZAR AL PAGO SOLO SI ALG�N PRODUCTO FUE SELECCIONADO ===
function procederAlPago() {
    // Convierte todos los checkboxes a un array y verifica si al menos uno est� marcado
    const algunoSeleccionado = [...document.querySelectorAll('.checkbox')].some(cb => cb.checked);

    // Si hay al menos un producto seleccionado, avanza a la parte 2 (pago)
    if (algunoSeleccionado) {
        mostrarParte('parte2');
    }
}

// === FUNCI�N PARA VALIDAR QUE SE HAYA SELECCIONADO UN M�TODO DE PAGO ===
function validarPago() {
    // Verifica si hay un input de tipo radio (para m�todo de pago) seleccionado
    const metodoSeleccionado = document.querySelector('input[name="payment-method"]:checked');

    // Si no se seleccion� ning�n m�todo de pago, muestra una alerta y detiene la funci�n
    if (!metodoSeleccionado) {
        alert("Por favor selecciona un m�todo de pago.");
        return;
    }

    // Si se seleccion�, avanza a la parte 4 (datos de la tarjeta)
    mostrarParte('parte4');
}

// === FUNCI�N PARA MOSTRAR MENSAJE DE �XITO Y OCULTAR TODAS LAS SECCIONES ===
/*function mostrarExito() {
    // Oculta todas las secciones activas
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Muestra el mensaje de �xito final (por ejemplo, "Compra realizada con �xito")
    document.getElementById('mensaje-exito').style.display = 'block';
}*/



