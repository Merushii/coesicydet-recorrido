document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#mi-seccion");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.remove("opacity-0");
                section.classList.add("animate-fade-up", "animate-delay-[10ms]");
                observer.unobserve(section); // Dejar de observar después de la animación
            }
        });
    });

    observer.observe(section);
});