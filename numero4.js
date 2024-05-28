function calcularTotal() {
    var sabor1 = document.getElementById("sabor1").value;
    var sabor2 = document.getElementById("sabor2").value;
    var sabor3 = document.getElementById("sabor3").value;
    var sabor4 = document.getElementById("sabor4").value;
    var refrigerante = parseInt(document.getElementById("refrigerante").value);

    var valorPizza = 12; // Valor de cada sabor de pizza em reais
    var valorRefrigerante = 7; // Valor de cada refrigerante em reais

    var totalPizzas = 4 * valorPizza;
    var totalRefrigerantes = refrigerante * valorRefrigerante;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "<h3>Pedido confirmado:</h3>";
    resultadoElement.innerHTML += "<p>Sabores de pizza escolhidos:</p>";
    resultadoElement.innerHTML += "<ul>";
    resultadoElement.innerHTML += "<li>" + sabor1 + "</li>";
    resultadoElement.innerHTML += "<li>" + sabor2 + "</li>";
    resultadoElement.innerHTML += "<li>" + sabor3 + "</li>";
    resultadoElement.innerHTML += "<li>" + sabor4 + "</li>";
    resultadoElement.innerHTML += "</ul>";
    resultadoElement.innerHTML += "<p>Total a pagar: R$" + (totalPizzas + totalRefrigerantes) + ",00</p>";
}