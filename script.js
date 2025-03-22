document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.style.display = index === n ? "block" : "none";
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === n);
        });

        slideIndex = n;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    if (prevButton) prevButton.addEventListener("click", prevSlide);
    if (nextButton) nextButton.addEventListener("click", nextSlide);

    setInterval(nextSlide, 3000); // Cambia el slider automáticamente cada 3 segundos

    showSlide(slideIndex); // Muestra la primera imagen al cargar la página

    // Control del menú inferior
    const menuItems = document.querySelectorAll(".bottom-menu a");
    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menuItems.forEach((el) => el.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
