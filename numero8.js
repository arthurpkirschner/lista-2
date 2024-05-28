function verificarParOuImpar() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoElement.innerHTML = "<p>Por favor, insira um numero valido.</p>";
    } else {
        if (numero % 2 === 0) {
            resultadoElement.innerHTML = "<p>O numero digitado e par.</p>";
        } else {
            resultadoElement.innerHTML = "<p>O numero digitado e impar.</p>";
        }
    }
}