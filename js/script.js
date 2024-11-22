// Esperar que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    //Configuración para el evneto Parallax
    const sections = document.querySelectorAll('section[data-type="background"]');

    //Iterar sobre cada sección que tien el atributo data-type= "background"
    sections.forEach(section => {
        // Obtener el valor de velocidad desde el atributo data-speed de la sección
        const speed = section.dataset.speed;

        //Agregar el evento de desplazamiento (scroll) a la ventana
        window.addEventListener('scroll', () => {
            // Calcular la posición vertical del fondo
            const yPos = -(window.scrollY / speed);
            const coords = `50% ${yPos}px`;

            // Aplicar la nueva posición
            section.style.backgroundPosition = coords;
        });
    });

    // Configurar la transición visual
    const navbar = document.querySelector('.navbar');

    // Agregar el evento de despazamiento
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;

        scroll > 0 ? navbar.classList.add('navbar-scroll') : navbar.classList.remove('navbar-scroll');

        scroll > 200 ? navbar.classList.add('bg-primary') : navbar.classList.remove('bg-primary');
    })







})