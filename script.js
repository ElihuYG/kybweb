document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const searchBtn = document.getElementById("search-btn");
    const searchPopup = document.getElementById("search-popup");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const moreBtn = document.getElementById("more-btn");
    const submenu = document.querySelector(".submenu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    searchBtn.addEventListener("click", () => {
        searchPopup.classList.remove("hidden");
        searchInput.focus();
    });

    closeSearch.addEventListener("click", () => {
        searchPopup.classList.add("hidden");
        searchResults.innerHTML = "";
        searchInput.value = "";
    });

    moreBtn.addEventListener("click", (event) => {
        event.preventDefault();
        submenu.classList.toggle("hidden");
    });

    const series = [
        { name: "Begins Youth", image: "posters_begins_youth.png", link: "beginsyouth.html" },
        { name: "Thamepo", image: "posters_thamepo.png", link: "thamepo.html" },
        { name: "Yoursky", image: "posters_yoursky.png", link: "yoursky.html" }
    ];

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query) {
            const filtered = series.filter(s => s.name.toLowerCase().includes(query));
            filtered.forEach(s => {
                const div = document.createElement("div");
                div.innerHTML = `<img src="${s.image}" alt="${s.name}"><span>${s.name}</span>`;
                div.addEventListener("click", () => { window.location.href = s.link; });
                searchResults.appendChild(div);
            });
        }
    });
});
