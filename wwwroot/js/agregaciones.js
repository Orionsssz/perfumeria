// Validación de campos vacíos
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function (e) {
        let valid = true;
        const inputs = form.querySelectorAll("input[required]");

        inputs.forEach(input => {
            input.classList.remove("error");
            if (!input.value.trim()) {
                input.classList.add("error");
                valid = false;
            }
        });

        if (!valid) e.preventDefault();
    });
});
