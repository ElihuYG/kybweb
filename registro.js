// Inicializar Supabase
const supabaseUrl = "https://lcsfhhhsfmnseweqwrye.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjc2ZoaGhzZm1uc2V3ZXF3cnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNTUxNDUsImV4cCI6MjA1NzkzMTE0NX0.pqpwtV5mM9ip96prsNdHN6eKMzi6J7LTpownEwdjvqQ";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("registroForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    // Intentar registrar al usuario
    const { user, error } = await supabase.auth.signUp({
        email,
        password
    });

    // Mostrar mensaje con animación
    if (error) {
        mostrarMensaje("❌ " + error.message, "error");
    } else {
        mostrarMensaje("✅ Registro exitoso. Verifica tu correo electrónico.", "exito");
        document.getElementById("registroForm").reset();
    }
});

// Función para mostrar mensajes animados
function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo;
    mensaje.style.opacity = "1";

    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
        mensaje.style.opacity = "0";
    }, 4000);
}
