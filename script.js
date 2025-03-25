// --- Menú hamburguesa ---
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

// Alternar menú hamburguesa
menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

// Cerrar menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove("open");
    }
});

// --- Popup de búsqueda ---
const searchIcon = document.getElementById("search-icon");
const searchPopup = document.getElementById("search-popup");
const closeSearch = document.getElementById("close-search");

// Abrir popup de búsqueda
searchIcon.addEventListener("click", () => {
    searchPopup.style.display = "flex";
});

// Cerrar popup de búsqueda
closeSearch.addEventListener("click", () => {
    searchPopup.style.display = "none";
});

// --- Buscar y mostrar sugerencias ---
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results");

// Simulación de datos de búsqueda
const data = [
    { title: "Begins Youth", img: "posters_begins_youth.png" },
    { title: "Thamepo", img: "thamepo_poster.png" },
    { title: "Yoursky", img: "yoursky_poster.png" }
];

// Función de búsqueda
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (searchText.length > 0) {
        const filtered = data.filter(item => item.title.toLowerCase().includes(searchText));

        if (filtered.length > 0) {
            resultsContainer.style.display = "block";
            filtered.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("result-item");
                div.innerHTML = `<img src="${item.img}" alt="${item.title}"><span>${item.title}</span>`;
                resultsContainer.appendChild(div);
            });
        } else {
            resultsContainer.style.display = "none";
        }
    } else {
        resultsContainer.style.display = "none";
    }
});

// Cerrar sugerencias al hacer clic fuera
document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
        resultsContainer.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const items = document.querySelectorAll(".carrusel-item");
    let index = 0;
    const total = items.length;
    let touchStartX = 0;
    let touchEndX = 0;

    function cambiarSlide(nuevoIndex) {
        index = (nuevoIndex + total) % total;
        carrusel.style.transform = `translateX(-${index * 100}%)`;
    }

    // Flechas (solo en PC)
    if (window.innerWidth > 768) {
        document.querySelector(".flecha-derecha").addEventListener("click", () => {
            cambiarSlide(index + 1);
        });

        document.querySelector(".flecha-izquierda").addEventListener("click", () => {
            cambiarSlide(index - 1);
        });
    }

    // Swipe en celular
    carrusel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carrusel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            cambiarSlide(index + 1); // Deslizar a la izquierda
        } else if (touchEndX - touchStartX > 50) {
            cambiarSlide(index - 1); // Deslizar a la derecha
        }
    });

    // Cambio automático cada 7s
    setInterval(() => {
        cambiarSlide(index + 1);
    }, 7000);
});
