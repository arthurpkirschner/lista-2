function calcular() {
    var dolarAtual = parseFloat(document.getElementById("inputDolar").value);
    if (isNaN(dolarAtual)) {
        alert("insira um valor valido para a cotação do dolar.");
        return;
    }

    var aumento1 = dolarAtual * 1.01;
    var aumento2 = dolarAtual * 1.02;
    var aumento5 = dolarAtual * 1.05;
    var aumento10 = dolarAtual * 1.10;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h3>Variacao do dolar:</h3>";
    resultElement.innerHTML += "<p>Se subir 1%: $" + aumento1.toFixed(2) + "</p>";
    resultElement.innerHTML += "<p>Se subir 2%: $" + aumento2.toFixed(2) + "</p>";
    resultElement.innerHTML += "<p>Se subir 5%: $" + aumento5.toFixed(2) + "</p>";
    resultElement.innerHTML += "<p>Se subir 10%: $" + aumento10.toFixed(2) + "</p>";
}   