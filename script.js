document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const searchBtn = document.getElementById("search-btn");
    const searchPopup = document.getElementById("search-popup");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    const series = [
        { name: "Begins Youth", img: "posters_begins_youth.png", link: "beginsyouth.html" },
        { name: "Thamepo", img: "poster_thamepo.png", link: "thamepo.html" },
        { name: "Yoursky", img: "poster_yoursky.png", link: "yoursky.html" }
    ];

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    searchBtn.addEventListener("click", function () {
        searchPopup.classList.remove("hidden");
        searchInput.focus();
    });

    closeSearch.addEventListener("click", function () {
        searchPopup.classList.add("hidden");
        searchInput.value = "";
        searchResults.innerHTML = "";
    });

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query) {
            const filteredSeries = series.filter(series => series.name.toLowerCase().includes(query));

            filteredSeries.forEach(series => {
                const div = document.createElement("div");
                div.classList.add("search-item");
                div.innerHTML = `<img src="${series.img}" alt="${series.name}"><span>${series.name}</span>`;
                div.addEventListener("click", function () {
                    window.location.href = series.link;
                });
                searchResults.appendChild(div);
            });
        }
    });
});
