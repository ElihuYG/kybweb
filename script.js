document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const searchBtn = document.getElementById("search-btn");
    const searchPopup = document.getElementById("search-popup");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Lista de series de ejemplo (puedes reemplazar con tu base de datos)
    const series = [
        { name: "Begins Youth", img: "posters_begins_youth.png", link: "beginsyouth.html" },
        { name: "Thamepo", img: "posters_thamepo.png", link: "thamepo.html" },
        { name: "Yoursky", img: "posters_yoursky.png", link: "yoursky.html" }
    ];

    // Evento para abrir/cerrar el menú hamburguesa
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    // Evento para abrir la ventana emergente del buscador
    searchBtn.addEventListener("click", function () {
        searchPopup.classList.remove("hidden");
    });

    // Evento para cerrar la ventana emergente del buscador
    closeSearch.addEventListener("click", function () {
        searchPopup.classList.add("hidden");
        searchInput.value = ""; // Limpiar el input
        searchResults.innerHTML = ""; // Limpiar resultados
    });

    // Búsqueda en vivo
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query === "") return;

        const filteredSeries = series.filter(s => s.name.toLowerCase().includes(query));

        filteredSeries.forEach(s => {
            const item = document.createElement("div");
            item.classList.add("search-result-item");
            item.innerHTML = `
                <img src="${s.img}" alt="${s.name}">
                <span>${s.name}</span>
            `;
            item.addEventListener("click", function () {
                window.location.href = s.link;
            });

            searchResults.appendChild(item);
        });
    });
});
