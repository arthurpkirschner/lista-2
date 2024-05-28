function calcular() {
    var numPessoas = parseInt(document.getElementById("inputPessoas").value);
    if (isNaN(numPessoas) || numPessoas < 1) {
        alert("insira um numero valido de pessoas.");
        return;
    }

    var ovosTotal = numPessoas * 2;
    var queijoTotal = numPessoas * 50;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h3>Ingredientes para um omelete:</h3>";
    resultElement.innerHTML += "<p>Ovos necessarios: " + ovosTotal + "</p>";
    resultElement.innerHTML += "<p>Queijo necessario: (em gramas): " + queijoTotal + "</p>";
}