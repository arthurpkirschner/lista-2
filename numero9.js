function calcularTurmas() {
    var numAlunos = parseInt(document.getElementById("numAlunos").value);
    var numTurmas = parseInt(document.getElementById("numTurmas").value);
    var pessoasPorTurma = Math.floor(numAlunos / numTurmas);
    var pessoasSemTurma = numAlunos % numTurmas;

    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numAlunos) || isNaN(numTurmas) || numAlunos <= 0 || numTurmas <= 0) {
        resultadoElement.innerHTML = "<p>Por favor, insira valores validos para número de alunos e turmas.</p>";
    } else {
        resultadoElement.innerHTML = "<h3>Distribuicao de alunos:</h3>";
        resultadoElement.innerHTML += "<p>Pessoas por turma: " + pessoasPorTurma + "</p>";
        resultadoElement.innerHTML += "<p>Pessoas sem turma: " + pessoasSemTurma + "</p>";
    }
}