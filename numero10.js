function verificarDesempenho() {
    var valorVendido = parseFloat(document.getElementById("valorVendido").value);
    var meta = parseFloat(document.getElementById("meta").value);
    var metaMinima = parseFloat(document.getElementById("metaMinima").value);

    var resultadoElement = document.getElementById("resultado");

    if (isNaN(valorVendido) || isNaN(meta) || isNaN(metaMinima)) {
        resultadoElement.innerHTML = "<p>Por favor, insira valores validos para as vendas e as metas.</p>";
    } else {
        var percentualMeta = (valorVendido / meta) * 100;
        var percentualMetaMinima = (valorVendido / metaMinima) * 100;

        resultadoElement.innerHTML = "<h3>Desempenho de vendas:</h3>";

        if (valorVendido >= meta) {
            resultadoElement.innerHTML += "<p>Parabens! Você atingiu a meta de vendas do mes.</p>";
        } else if (valorVendido >= metaMinima) {
            resultadoElement.innerHTML += "<p>Você atingiu a meta minima de vendas do mes.</p>";
        } else {
            resultadoElement.innerHTML += "<p>Você não atingiu nenhuma das metas de vendas do mes.</p>";
        }

        resultadoElement.innerHTML += "<p>Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%</p>";
        resultadoElement.innerHTML += "<p>Percentual de atingimento da meta minima: " + percentualMetaMinima.toFixed(2) + "%</p>";
    }
}
