document.addEventListener("DOMContentLoaded", function () {
    // Menú desplegable
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuBtn) {
            menu.classList.add("hidden");
        }
    });

    // Buscador
    const searchBtn = document.getElementById("search-btn");
    const searchBox = document.createElement("div");
    searchBox.classList.add("search-box", "hidden");
    searchBox.innerHTML = `
        <input type="text" id="search-input" placeholder="Buscar...">
        <button id="close-search">✖</button>
        <div id="search-results"></div>
    `;
    document.body.appendChild(searchBox);

    searchBtn.addEventListener("click", function () {
        searchBox.classList.toggle("hidden");
        document.getElementById("search-input").focus();
    });

    document.getElementById("close-search").addEventListener("click", function () {
        searchBox.classList.add("hidden");
    });

    document.getElementById("search-input").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const resultsDiv = document.getElementById("search-results");
        resultsDiv.innerHTML = "";

        if (query) {
            const series = [
                { title: "Begins Youth", url: "beginsyouth.html", img: "posters_begins_youth.png" },
                { title: "Thamepo", url: "thamepo.html", img: "posters_thamepo.png" },
                { title: "Yoursky", url: "yoursky.html", img: "posters_yoursky.png" }
            ];

            const filtered = series.filter(s => s.title.toLowerCase().includes(query));

            filtered.forEach(s => {
                const item = document.createElement("div");
                item.innerHTML = `
                    <img src="${s.img}" alt="${s.title}" style="width: 50px; border-radius: 5px; margin-right: 10px;">
                    <a href="${s.url}" style="color: black; text-decoration: none;">${s.title}</a>
                `;
                item.style.display = "flex";
                item.style.alignItems = "center";
                item.style.padding = "5px";
                item.style.cursor = "pointer";

                item.addEventListener("click", function () {
                    window.location.href = s.url;
                });

                resultsDiv.appendChild(item);
            });
        }
    });
});
