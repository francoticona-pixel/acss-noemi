let tamanhoGrande = false;

function aumentarTexto() {
    document.body.classList.add("texto-grande");
    document.body.classList.remove("texto-pequeno");
    tamanhoGrande = true;
}

function diminuirTexto() {
    document.body.classList.remove("texto-grande");
    document.body.classList.add("texto-pequeno");
    tamanhoGrande = false;
}

function altoContraste(){
    document.body.classList.toggle("contraste")

}

function lerPagina(){
    speechSynthesis.cancel();
    const texto = document.getElementById("conteudo").innerText;
    const leitura =  new SpeechSynthesisUtterance(texto);
    leitura.lang = "es-ES";
    leitura.rate = 0.9;
    speechSynthesis.speak(leitura);
    
}
function pararLeitura() {
    speechSynthesis.cancel();
}



