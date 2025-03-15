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
