document.getElementById("test-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página

    // 1) Leemos las respuestas
    let respuestas = [];
    const formElements = document.getElementById("test-form").elements;
    for (let i = 0; i < 12; i++) {
        const pregunta = formElements[`pregunta${i + 1}`];
        if (pregunta && pregunta.value) {
            respuestas.push(parseInt(pregunta.value, 10));
        }
    }

    // 2) Inicializamos el array de frecuencias para valores 0–4
    let frecuencias = [0, 0, 0, 0, 0];

    // 3) Contamos cuántas veces aparece cada valor
    respuestas.forEach(valor => {
        if (valor >= 0 && valor <= 4) {
            frecuencias[valor]++;
        }
    });

    // 4) Calculamos el acumulado (peso medio), si quieres un promedio ponderado
    let resultado_test = 0;
    for (let i = 0; i < frecuencias.length; i++) {
        // cada valor i se multiplica por cuántas veces aparece y se divide
        resultado_test += (frecuencias[i] * i) / 12;
    }

    console.log("Respuestas:", respuestas);
    console.log("Frecuencias:", frecuencias);
    

    // Aquí podrías guardarlo y redirigir, por ejemplo:
    localStorage.setItem("respuestasTest", JSON.stringify(respuestas));
    localStorage.setItem("frecuenciasTest", JSON.stringify(frecuencias));
    localStorage.setItem("testAcumulado", resultado_test);
    window.location.href = 'menu.html';
});
