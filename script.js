document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("closeMenu");
    const searchToggle = document.getElementById("searchToggle");
    const searchBar = document.getElementById("searchBar");
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    menuToggle.addEventListener("click", function () {
        sidebar.style.left = "0";
    });

    closeMenu.addEventListener("click", function () {
        sidebar.style.left = "-250px";
    });

    searchToggle.addEventListener("click", function () {
        searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
    });

    function showSlide(i) {
        index = i;
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % dots.length;
        showSlide(index);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
    });

    setInterval(nextSlide, 3000);
});
$(document).ready(function(){
    // Slider con puntos de navegación
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true, // Asegura que los puntos de navegación aparezcan
    });

    // Abrir y cerrar menú
    $("#menu-toggle").click(function() {
        $("#menu").toggle();
    });

    // Buscador con sugerencias dinámicas
    let series = ["ThemePo", "Begins Youth", "Your Sky"];
    
    $("#search-bar").on("input", function() {
        let query = $(this).val().toLowerCase();
        let filtered = series.filter(s => s.toLowerCase().includes(query));
        
        if (filtered.length > 0) {
            $("#suggestions").html(filtered.map(s => `<div class='suggestion'>${s}</div>`).join("")).show();
        } else {
            $("#suggestions").hide();
        }
    });

    // Hacer que el menú de búsqueda aparezca y desaparezca
    $("#search-icon").click(function() {
        $("#search-bar").toggle().focus();
        $("#suggestions").toggle();
    });

    // Hacer que las sugerencias desaparezcan si se da clic fuera
    $(document).click(function(event) {
        if (!$(event.target).closest(".search-container").length) {
            $("#suggestions").hide();
        }
    });

    // Mostrar la información de cada slide
    $(".info").show();
});
