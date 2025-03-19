import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lcsfhhhsfmnseweqwrye.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjc2ZoaGhzZm1uc2V3ZXF3cnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNTUxNDUsImV4cCI6MjA1NzkzMTE0NX0.pqpwtV5mM9ip96prsNdHN6eKMzi6J7LTpownEwdjvqQ";
const supabase = createClient(supabaseUrl, supabaseKey);

// Ahora sí, podemos agregar el event listener
document.getElementById("registroForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const { user, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        mostrarMensaje("Error: " + error.message, "error");
    } else {
        mostrarMensaje("Registro exitoso. Verifica tu correo.", "success");
    }
});

// Función para mostrar mensajes animados
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = `mensaje ${tipo}`;
    mensajeDiv.innerText = mensaje;

    document.body.appendChild(mensajeDiv);

    setTimeout(() => {
        mensajeDiv.style.opacity = "0";
        setTimeout(() => mensajeDiv.remove(), 500);
    }, 3000);
}
<script src="registro.js"></script>
</body>
</html>
