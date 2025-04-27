// Variables para almacenar las horas de sueño registradas
let registros = [];

// Cuando el formulario se envía
document.getElementById('form-sueno').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga

    const horasInput = document.getElementById('horas_sueno');
    const horas = parseFloat(horasInput.value);

    if (!isNaN(horas)) {
        registros.push(horas);

        // Calcular promedio
        const suma = registros.reduce((acc, val) => acc + val, 0);
        const promedio = suma / registros.length;

        // Actualizar progreso
        let porcentaje = (promedio / 8) * 100;
        if (porcentaje > 100) porcentaje = 100;

        document.getElementById('progreso').value = porcentaje;

        // Actualizar la racha
        document.getElementById('racha').innerHTML = `Días consecutivos registrando sueño: <strong>${registros.length} días</strong>`;

        // Limpiar el input
        horasInput.value = '';
    }
});
