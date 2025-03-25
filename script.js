// Carrusel automático: cambia cada 7 segundos
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Ocultar todos los slides
    slides.forEach(slide => {
        slide.style.opacity = 0;
    });
    // Mostrar el slide actual
    slides[index].style.opacity = 1;
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Iniciar el carrusel
setInterval(nextSlide, 7000); // Cambiar cada 7 segundos

// Mostrar el primer slide al inicio
showSlide(currentSlide);

// Carrusel manual (en móvil, el usuario puede deslizar)
const slider = document.querySelector('.slider');
let isMouseDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Cuánto se mueve el slider
    slider.scrollLeft = scrollLeft - walk;
});

// Funcionalidad para el botón "Ver Ahora"
const watchButtons = document.querySelectorAll('.watch-now');
watchButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("¡Redirigiendo a la página de la serie!");
        // Aquí puedes poner la lógica para redirigir al HTML de la serie correspondiente
        window.location.href = "#"; // Sustituir "#" por la URL del HTML de la serie
    });
});
