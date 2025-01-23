const respuestasCorrectas = {
  q1: "a",
  q2: "b",
  q3: "b",
  q4: "c",
  q5: "b",
  q6: "a",
  q7: "a",
  q8: "b",
  q9: "b",
  q10: "b"
};

function mostrarResultados() {
  const form = document.getElementById("quizForm");
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  let correctas = 0;
  let total = Object.keys(respuestasCorrectas).length;
  const resultados = {};

  Object.keys(respuestasCorrectas).forEach((pregunta) => {
    const respuestaSeleccionada = form[pregunta].value;
    const esCorrecta = respuestaSeleccionada === respuestasCorrectas[pregunta];

    resultados[pregunta] = esCorrecta ? "Correcta" : "Incorrecta";

    const resultado = document.createElement("div");
    resultado.classList.add("result");
    resultado.classList.add(esCorrecta ? "correct" : "incorrect");
    resultado.innerText = `Pregunta ${pregunta.replace("q", "")}: ${
      esCorrecta ? "Correcta" : "Incorrecta"
    }`;

    if (esCorrecta) correctas++;

    resultadosDiv.appendChild(resultado);
  });

  // Guardar en localStorage
  localStorage.setItem("resultadosQuiz", JSON.stringify(resultados));
  localStorage.setItem("score", `${correctas} de ${total} preguntas correctas`);

  const totalResultado = document.createElement("div");
  totalResultado.innerText = `Obtuviste ${correctas} de ${total} preguntas correctas.`;
  resultadosDiv.appendChild(totalResultado);
}

function mostrarResultadosGuardados() {
  const resultadosDiv = document.getElementById("resultados");
  const resultadosGuardados = localStorage.getItem("resultadosQuiz");
  const scoreGuardado = localStorage.getItem("score");

  if (resultadosGuardados && scoreGuardado) {
    resultadosDiv.innerHTML = `<h2>Tus respuestas fueron:</h2>`;
    const resultados = JSON.parse(resultadosGuardados);

    Object.keys(resultados).forEach((pregunta) => {
      const resultado = document.createElement("div");
      resultado.classList.add("result");
      resultado.classList.add(resultados[pregunta] === "Correcta" ? "correct" : "incorrect");
      resultado.innerText = `Pregunta ${pregunta.replace("q", "")}: ${resultados[pregunta]}`;
      resultadosDiv.appendChild(resultado);
    });

    const totalResultado = document.createElement("div");
    totalResultado.innerText = scoreGuardado;
    resultadosDiv.appendChild(totalResultado);

    // Ocultar el formulario
    document.getElementById("quizForm").style.display = "none";
  }
}

function borrarResultados() {
  // Borrar datos del localStorage
  localStorage.removeItem("resultadosQuiz");
  localStorage.removeItem("score");

  // Recargar la página para reiniciar
  location.reload();
}

// Mostrar resultados guardados al cargar la página
window.onload = mostrarResultadosGuardados;
