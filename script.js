// ======= Menú desplegable =======
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});

// ======= Buscador =======
document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".search-icon");
    const searchPopup = document.querySelector(".search-popup");
    const searchInput = document.querySelector(".search-box input");
    const resultsContainer = document.querySelector(".results");

    searchIcon.addEventListener("click", () => {
        searchPopup.style.display = "flex";
        searchInput.focus();
    });

    searchPopup.addEventListener("click", (event) => {
        if (!event.target.closest(".search-box")) {
            searchPopup.style.display = "none";
        }
    });

    // Simulación de búsqueda con resultados falsos
    const series = [
        { title: "Begins Youth", img: "images/begins_youth.jpg" },
        { title: "Thamepo", img: "images/thamepo.jpg" },
        { title: "Yoursky", img: "images/yoursky.jpg" }
    ];

    searchInput.addEventListener("input", () => {
        let query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = "";
        
        if (query.trim() === "") {
            resultsContainer.style.display = "none";
            return;
        }

        let filtered = series.filter(item => item.title.toLowerCase().includes(query));
        
        if (filtered.length === 0) {
            resultsContainer.innerHTML = "<p style='color: black; padding: 5px;'>No se encontraron resultados</p>";
        } else {
            filtered.forEach(item => {
                let div = document.createElement("div");
                div.classList.add("result-item");
                div.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <span>${item.title}</span>
                `;
                div.addEventListener("click", () => {
                    window.location.href = `${item.title.toLowerCase().replace(/\s+/g, "_")}.html`;
                });
                resultsContainer.appendChild(div);
            });
        }

        resultsContainer.style.display = "block";
    });
});

// ======= Modo Oscuro (Opcional) =======
document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = document.querySelector("#toggle-dark-mode");

    if (toggleDarkMode) {
        toggleDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});
