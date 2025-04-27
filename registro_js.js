document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("registro-form");

    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario

            // Obtener los valores del formulario
            const nombre = formulario.nombre.value;
            const correo = formulario.correo.value;
            const contrasena = formulario.contrasena.value;
            const telefono = formulario.telefono.value;
            const apodo = formulario.apodo.value;

            // Guardar los datos en localStorage
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("correo", correo);
            localStorage.setItem("contrasena", contrasena);
            localStorage.setItem("telefono", telefono);
            localStorage.setItem("apodo", apodo);

            console.log("Registro guardado:");
            console.log("Nombre:", nombre);
            console.log("Correo:", correo);
            console.log("Contraseña:", contrasena);
            console.log("Teléfono:", telefono);
            console.log("Apodo:", apodo);

            const greetingEl = document.getElementById('greeting');
             greetingEl.textContent = `¡Bienvenid${apodo.endsWith('a') ? 'a' : 'o'}, ${apodo}!`;

            // Ahora redireccionamos
            window.location.href = "test.html";
        });
    } else {
        console.log("Formulario no encontrado");
    }
});