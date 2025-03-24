document.addEventListener("DOMContentLoaded", function () {
    // Menú desplegable
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    // Buscador emergente
    const searchBtn = document.getElementById("search-btn");
    const searchPopup = document.getElementById("search-popup");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    searchBtn.addEventListener("click", function () {
        searchPopup.classList.remove("hidden");
        searchInput.focus();
    });

    closeSearch.addEventListener("click", function () {
        searchPopup.classList.add("hidden");
        searchInput.value = "";
        searchResults.innerHTML = "";
    });

    // Simulación de datos de series
    const series = [
        { title: "Begins Youth", image: "posters_begins_youth.png", link: "beginsyouth.html" },
        { title: "Thamepo", image: "thamepo_poster.png", link: "thamepo.html" },
        { title: "Yoursky", image: "yoursky_poster.png", link: "yoursky.html" }
    ];

    // Búsqueda en vivo
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.trim() !== "") {
            const filteredSeries = series.filter(s => s.title.toLowerCase().includes(query));
            filteredSeries.forEach(s => {
                const div = document.createElement("div");
                div.classList.add("search-result-item");
                div.innerHTML = `
                    <img src="${s.image}" alt="${s.title}">
                    <span>${s.title}</span>
                `;
                div.addEventListener("click", () => {
                    window.location.href = s.link;
                });
                searchResults.appendChild(div);
            });
        }
    });
});
