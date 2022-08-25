/*
quando clicar na seta pra avançar temos que 
esconder todas as imagens e mostrar a próxima imagem 
a imagem atual começa do zero pq é a primeira imagem assim que for 
clicado no avançar eu preciso adicionar mais 1 ao contator de imagem 
pra poder saber que agora eu vou mostrar a segunda imagem 

esconder todas as imagens 
pegar com o DOM e remover a class mostrar 
mostar a proxima imagem 
pegar todas as imagens, descobrir qual é a próxima, e colocar a classe monstrar na nela 

 */

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function monstrarImagens() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

// quando clicar na seta pra avançar temos que
// esconder todas as imagens e mostrar a próxima imagem

setaAvancar.addEventListener("click", function () {
  // a imagem atual começa do zero pq é a primeira imagem assim que for
  // clicado no avançar eu preciso adicionar mais 1 ao contator de imagem
  // pra poder saber que agora eu vou mostrar a segunda imagem

  // teste se o contador da imagemAtual é igual ao total de imagens

  const totalDeImagens = imagensPainel.length - 1;

  if (imagemAtual === totalDeImagens) {
    return;
  }

  imagemAtual++;

  // esconder todas as imagens
  // pegar com o DOM e remover a class mostrar

  esconderImagens();
  monstrarImagens();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagens();
  monstrarImagens();
});
