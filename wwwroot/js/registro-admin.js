document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const messageDiv = document.querySelector(".message");

    // Agregar clase .error si hay mensajes de error visibles al cargar
    document.querySelectorAll("span.text-danger").forEach(span => {
        if (span.textContent.trim() !== "") {
            const inputGroup = span.closest(".input-group");
            const input = inputGroup?.querySelector("input");
            if (input) {
                input.classList.add("error");
            }
        }
    });

    // Animar aparición del mensaje general si existe
    if (form && messageDiv && messageDiv.textContent.trim() !== "") {
        messageDiv.style.opacity = 0;
        messageDiv.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        messageDiv.style.transform = "translateY(-10px)";
        setTimeout(() => {
            messageDiv.style.opacity = 1;
            messageDiv.style.transform = "translateY(0)";
        }, 100);

        setTimeout(() => {
            messageDiv.style.opacity = 0;
        }, 4000);
    }

    // Limpiar errores al volver a escribir
    form?.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove("error");
        });
    });
});
