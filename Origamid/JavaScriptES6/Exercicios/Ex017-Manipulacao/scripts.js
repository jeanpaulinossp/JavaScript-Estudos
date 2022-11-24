// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const duplicaMenu = menu.cloneNode(true);

copy.appendChild(duplicaMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDt.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais

const faq3 = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq3.innerHTML = animais.innerHTML;
