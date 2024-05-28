function verificarSituacao() {
    var nota = parseFloat(document.getElementById("nota").value);

    var resultadoElement = document.getElementById("resultado");

    if (isNaN(nota)) {
        resultadoElement.innerHTML = "<p>Por favor, insira uma nota valida.</p>";
    } else if (nota > 6) {
        resultadoElement.innerHTML = "<p>Aprovado</p>";
    } else if (nota >= 4 && nota <= 6) {
        resultadoElement.innerHTML = "<p>Precisa fazer prova substitutiva</p>";
    } else {
        resultadoElement.innerHTML = "<p>Reprovado</p>";
    }
}