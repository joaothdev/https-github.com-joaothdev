 // Adiciona um evento para detectar a entrada do nome
 document.getElementById("text").addEventListener("input", function() {
    var mensagemField = document.getElementById("mensagemField");

    // Verifica se o campo de e-mail está preenchido
    if (this.value.trim() !== "") {
        mensagemField.style.display = "block"; // Mostra o campo de mensagem
    } else {
        mensagemField.style.display = "none";  // Esconde o campo de mensagem
    }
});