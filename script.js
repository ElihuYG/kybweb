document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const searchIcon = document.getElementById("search-icon");
    const menuSearchIcon = document.getElementById("menu-search-icon");
    const searchPopup = document.getElementById("search-popup");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Abrir/Cerrar menú hamburguesa
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove("open");
        }
    });

    // Abrir popup de búsqueda desde el icono principal o desde el menú
    function openSearch() {
        searchPopup.style.display = "flex";
        searchInput.focus();
    }

    searchIcon.addEventListener("click", openSearch);
    menuSearchIcon.addEventListener("click", openSearch);

    // Cerrar popup de búsqueda
    closeSearch.addEventListener("click", () => {
        searchPopup.style.display = "none";
        searchInput.value = "";
        searchResults.style.display = "none";
    });

    // Funcionalidad de búsqueda
    const series = [
        { name: "Begins Youth", image: "posters_begins_youth.png", link: "beginsyouth.html" },
        { name: "Thamepo", image: "thamepo.png", link: "thamepo.html" },
        { name: "Yoursky", image: "yoursky.png", link: "yoursky.html" }
    ];

    searchInput.addEventListener("input", () => {
        let query = searchInput.value.toLowerCase();
        let filtered = series.filter(s => s.name.toLowerCase().includes(query));

        if (query.length > 0 && filtered.length > 0) {
            searchResults.innerHTML = filtered.map(s =>
                `<div class="result-item" onclick="window.location.href='${s.link}'">
                    <img src="${s.image}" alt="${s.name}">
                    <span>${s.name}</span>
                </div>`
            ).join("");
            searchResults.style.display = "block";
        } else {
            searchResults.style.display = "none";
        }
    });

    // Carrusel automático
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Cambiar cada 5 segundos

    // Botón "Ver Ahora"
    const watchButtons = document.querySelectorAll('.watch-now');
    watchButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("¡Redirigiendo a la página de la serie!");
            // Aquí puedes poner la lógica para redirigir a la página de la serie
            window.location.href = "#"; // Sustituir "#" por la URL del HTML de la serie
        });
    });
});

// Obtener el contenedor donde se mostrarán los resultados
const searchResults = document.getElementById("search-results");

// Series en el buscador
const series = [
    { name: "Begins Youth", image: "posters_begins_youth.png", link: "beginsyouth.html" },
    { name: "Thamepo", image: "thamepo.png", link: "thamepo.html" },
    { name: "Yoursky", image: "yoursky.png", link: "yoursky.html" }
];

// Función para mostrar resultados
function searchSeries(query) {
    searchResults.innerHTML = ""; // Limpiar resultados anteriores

    series.forEach(serie => {
        if (serie.name.toLowerCase().includes(query.toLowerCase())) {
            const resultItem = document.createElement("a");
            resultItem.href = serie.link;
            resultItem.classList.add("search-item");

            // Agregar la imagen
            const img = document.createElement("img");
            img.src = serie.image;
            img.alt = serie.name;

            // Agregar el nombre de la serie
            const title = document.createElement("p");
            title.textContent = serie.name;

            // Insertar en el buscador
            resultItem.appendChild(img);
            resultItem.appendChild(title);
            searchResults.appendChild(resultItem);
        }
    });
}

// Escuchar el input de búsqueda
document.getElementById("search-input").addEventListener("input", function () {
    searchSeries(this.value);
});
