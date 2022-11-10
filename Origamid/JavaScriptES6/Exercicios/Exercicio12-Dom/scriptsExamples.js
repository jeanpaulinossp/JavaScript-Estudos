const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[1]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

// o href com ^ pega todos os itens que começam com o parametro passado.
const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno.href);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

// retorno SectionHTML => É atualizado conforme é alterado automaticamente
// retorno SectionNode => É estático, não atualiza automaticamente

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

// Normalmente o SectionHTML não aceita o foreach, mas se transformado em array, passa a aceita
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item, index) {
  console.log(item);
});
