function abrirPainel() {

    const painel = document.getElementById("painelAcessibilidade");

    painel.classList.add("aberto");
}


function fecharPainel() {

    const painel = document.getElementById("painelAcessibilidade");

    painel.classList.remove("aberto");
}


function aumentarTexto() {


document.body.classList.add("texto-grande");

document.body.classList.remove("texto-pequeno");


}

function diminuirTexto() {


document.body.classList.add("texto-pequeno");

document.body.classList.remove("texto-grande");


}

function altoContraste() {

document.body.classList.toggle("contraste");


}

function lerPagina() {

speechSynthesis.cancel();

const conteudo = document.getElementById("conteudo");

const texto = conteudo.innerText;

const leitura = new SpeechSynthesisUtterance(texto);

leitura.lang = "pt-BR";

leitura.rate = 0.9;

speechSynthesis.speak(leitura);


}

function pararLeitura() {

speechSynthesis.cancel();


}

function destacarLinks() {

document.body.classList.toggle("links-destacados");


}

function ativarFoco() {

document.body.classList.toggle("foco-ativo");


}

function aumentarEspacamento() {


document.body.classList.toggle("espacamento");

}
