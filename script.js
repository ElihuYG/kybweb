// Carrusel automático
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    
    function showSlide(index) {
        items.forEach(item => item.classList.remove("active"));
        items[index].classList.add("active");
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
});

// Menú hamburguesa
document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector(".menu-content").style.display = "block";
});

document.querySelector(".close-menu").addEventListener("click", function () {
    document.querySelector(".menu-content").style.display = "none";
});

// Buscador interactivo
document.querySelector("#search").addEventListener("input", function () {
    let query = this.value.toLowerCase();
    let resultsContainer = document.querySelector(".search-results");
    
    if (query.length > 1) {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = "<p>Buscando...</p>";
        
        setTimeout(() => {
            resultsContainer.innerHTML = "<p>Resultados para '" + query + "' (Ejemplo)</p>";
        }, 500);
    } else {
        resultsContainer.style.display = "none";
    }
});
