function mostrarRegistro() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("registro").style.display = "block";
}

function mostrarLogin() {
    document.getElementById("registro").style.display = "none";
    document.querySelector(".container").style.display = "block";
}

function registrar() {
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPassword").value;

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Este correo ya está registrado.");
        return;
    }

    localStorage.setItem(email, password);
    alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
    mostrarLogin();
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
        alert("¡Bienvenido " + email + "!");
        window.location.href = "catalogo.html"; // Redirige al catálogo
    } else {
        alert("Correo o contraseña incorrectos");
    }
}
function verEpisodio(video) {
    localStorage.setItem("episodioActual", video);
    window.location.href = "player.html";
}

function cerrarSesion() {
    alert("Sesión cerrada");
    window.location.href = "index.html";
}
