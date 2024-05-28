function calcular() {
    var numero1 = parseInt(document.getElementById("inputNumero1").value);
    var numero2 = parseInt(document.getElementById("inputNumero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("por favor, insira números inteiros válidos.");
        return;
    }

    var resultadoElement = document.getElementById("result");
    resultadoElement.innerHTML = "<h3>Resultados das operacoes:</h3>";
    resultadoElement.innerHTML += "<p>Soma: " + (numero1 + numero2) + "</p>";
    resultadoElement.innerHTML += "<p>Subtracao: " + (numero1 - numero2) + "</p>";
    resultadoElement.innerHTML += "<p>Multiplicacao: " + (numero1 * numero2) + "</p>";

    if (numero2 !== 0) {
        resultadoElement.innerHTML += "<p>Divisao: " + (numero1 / numero2) + "</p>";
    } else {
        resultadoElement.innerHTML += "<p>Divisao: Não é possível dividir por zero.</p>";
    }
}