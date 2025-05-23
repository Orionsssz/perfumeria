document.addEventListener('DOMContentLoaded', function () {
    // Lógica para activar el menú correcto
    const currentPath = window.location.pathname.toLowerCase();

    // Remover todas las clases 'active' primero
    document.querySelectorAll('.sidebar li').forEach(item => {
        item.classList.remove('active');
    });

    // Activar solo el correspondiente
    document.querySelectorAll('.sidebar a').forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase();

        if (currentPath === linkPath ||
            (currentPath.startsWith(linkPath) && linkPath !== '/')) {
            link.parentElement.classList.add('active');
        }
    });

    // Menú de usuario
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.addEventListener('click', function () {
            window.location.href = '/Perfil'; // Redirige directamente al perfil
        });
    }

    // Efectos hover para tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Efecto hover para items del menú
    const menuItems = document.querySelectorAll('.sidebar li');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(209, 196, 233, 0.05)';
            }
        });

        item.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '';
            }
        });
    });
});