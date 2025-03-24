document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const moreBtn = document.getElementById("more-btn");
    const submenu = document.querySelector(".submenu");
    const searchBtn = document.getElementById("search-btn");
    const searchPopup = document.getElementById("search-popup");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    moreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        submenu.classList.toggle("hidden");
    });

    searchBtn.addEventListener("click", () => {
        searchPopup.classList.remove("hidden");
    });

    closeSearch.addEventListener("click", () => {
        searchPopup.classList.add("hidden");
    });

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.length > 0) {
            const suggestions = ["Begins Youth", "Thamepo", "Yoursky"];
            const filtered = suggestions.filter(title => title.toLowerCase().includes(query));

            filtered.forEach(title => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `<img src='poster_${title.replace(/ /g, '_').toLowerCase()}.png' class='result-img'> ${title}`;
                resultItem.addEventListener("click", () => {
                    window.location.href = `${title.replace(/ /g, '_').toLowerCase()}.html`;
                });
                searchResults.appendChild(resultItem);
            });
        }
    });
});
