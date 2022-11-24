// Verifique a distância da primeira imagem
// em relação ao topo da página

const img1 = document.querySelector("img");

console.log(img1.offsetTop);

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll("img");

function somaImagens() {
  let soma = 0;
  imgs.forEach((item) => {
    soma += item.width;
  });
  console.log(`A soma de todas as imagens é: ${soma}`);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

function verificaLinks() {
  links.forEach((item, index) => {
    if (item.clientHeight >= 48 && item.clientWidth >= 48) {
      console.log(`Link ${index} está de acordo com as normas do Google.`);
    } else {
      console.log(`Link ${index} não está de acordo com as normas do Google.`);
    }
  });
}

window.onload = function () {
  somaImagens();
  verificaLinks();
};

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const addClass = document.querySelector(".menu");

// const tela = window.innerWidth;
// if (window.innerWidth <= 720) {
//   addClass.classList.add("menu-mobile");
// }

const tela1 = window.matchMedia("(max-width: 720px)").matches;
if (tela1) {
  addClass.classList.add("menu-mobile");
}
