function verificarMaisVelha() {
    var nome1 = document.getElementById("nome1").value;
    var anoNascimento1 = parseInt(document.getElementById("anoNascimento1").value);

    var nome2 = document.getElementById("nome2").value;
    var anoNascimento2 = parseInt(document.getElementById("anoNascimento2").value);

    var nome3 = document.getElementById("nome3").value;
    var anoNascimento3 = parseInt(document.getElementById("anoNascimento3").value);

    var anoAtual = new Date().getFullYear();

    var idade1 = anoAtual - anoNascimento1;
    var idade2 = anoAtual - anoNascimento2;
    var idade3 = anoAtual - anoNascimento3;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "<h3>Pessoas Mais Velhas:</h3>";

    if (idade1 >= idade2 && idade1 >= idade3) {
        resultadoElement.innerHTML += "<p>Pessoa mais velha: " + nome1 + " - " + idade1 + " anos</p>";
        if (idade2 >= idade3) {
            resultadoElement.innerHTML += "<p>Segunda pessoa mais velha: " + nome2 + " - " + idade2 + " anos</p>";
            resultadoElement.innerHTML += "<p>Terceira pessoa mais velha: " + nome3 + " - " + idade3 + " anos</p>";
        } else {
            resultadoElement.innerHTML += "<p>Segunda pessoa mais velha: " + nome3 + " - " + idade3 + " anos</p>";
            resultadoElement.innerHTML += "<p>Terceira pessoa mais velha: " + nome2 + " - " + idade2 + " anos</p>";
        }
    } else if (idade2 >= idade1 && idade2 >= idade3) {
        resultadoElement.innerHTML += "<p>Pessoa mais velha: " + nome2 + " - " + idade2 + " anos</p>";
        if (idade1 >= idade3) {
            resultadoElement.innerHTML += "<p>Segunda pessoa mais velha: " + nome1 + " - " + idade1 + " anos</p>";
            resultadoElement.innerHTML += "<p>Terceira pessoa mais velha: " + nome3 + " - " + idade3 + " anos</p>";
        } else {
            resultadoElement.innerHTML += "<p>Segunda pessoa mais velha: " + nome3 + " - " + idade3 + " anos</p>";
            resultadoElement.innerHTML += "<p>Terceira pessoa mais velha: " + nome1 + " - " + idade1 + " anos</p>";
        }
    } else {
        resultadoElement.innerHTML += "<p>Pessoa mais velha: " + nome3 + " - " + idade3 + " anos</p>";
        if (idade1 >= idade2) {
            resultadoElement.innerHTML += "<p>Segunda pessoa mais velha: " + nome1 + " - " + idade1 + " anos</p>";
            resultadoElement.innerHTML += "<p>Terceira pessoa mais velha: " + nome2 + " - " + idade2 + " anos</p>";
        } else {
            resultadoElement.innerHTML += "<p>Segunda pessoa mais velha: " + nome2 + " - " + idade2 + " anos</p>";
            resultadoElement.innerHTML += "<p>Terceira pessoa mais velha: " + nome1 + " - " + idade1 + " anos</p>";
        }
    }
}