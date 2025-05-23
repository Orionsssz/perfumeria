document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.querySelector(".mensaje-exito");
    if (mensaje) {
        setTimeout(() => {
            mensaje.style.transition = "opacity 0.6s ease-out";
            mensaje.style.opacity = 0;
        }, 4000);
    }
});
