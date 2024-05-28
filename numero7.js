function compararNumeros() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    var resultadoElement = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultadoElement.innerHTML = "<p>Por favor, insira numeros inteiros validos.</p>";
    } else {
        if (num1 > num2) {
            resultadoElement.innerHTML = "<p>O primeiro numero e maior que o segundo.</p>";
        } else if (num1 < num2) {
            resultadoElement.innerHTML = "<p>O primeiro numero e menor que o segundo.</p>";
        } else {
            resultadoElement.innerHTML = "<p>O primeiro numero e igual ao segundo.</p>";
        }
    }
}