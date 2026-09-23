function calcularDistancia() {

    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    const resultado = document.getElementById("resultadoDistancia");

    if (
        isNaN(x1) ||
        isNaN(y1) ||
        isNaN(x2) ||
        isNaN(y2)
    ) {
        resultado.innerHTML = "⚠️ Preencha todas as coordenadas.";
        return;
    }

    const distancia = Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2)
    );

    resultado.innerHTML =
        "📏 Distância = " + distancia.toFixed(2);
}


function responder(botao, correta) {

    const feedback = document.getElementById("feedback");

    const botoes = document.querySelectorAll(".opcoes button");

    botoes.forEach(function(btn) {
        btn.disabled = true;
    });

    if (correta) {

        feedback.innerHTML =
            "🎉 Muito bem! A resposta correta é 5.";

        botao.style.background = "#d9ead3";

    } else {

        feedback.innerHTML =
            "❌ Não foi dessa vez! A resposta correta é 5.";

        botao.style.background = "#f4cccc";

    }
}
