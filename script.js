// Variables para los slides
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Función para cambiar el slide
function changeSlide() {
    // Ocultar el slide actual
    slides[currentIndex].style.opacity = 0;

    // Incrementamos el índice y hacemos que sea cíclico
    currentIndex = (currentIndex + 1) % totalSlides;

    // Mostrar el siguiente slide
    slides[currentIndex].style.opacity = 1;
}

// Cambiar de slide cada 7 segundos
setInterval(changeSlide, 7000);

// Inicializar el primer slide (lo mostramos al cargar la página)
slides[currentIndex].style.opacity = 1;
