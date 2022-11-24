// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;

console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classes = document.querySelector(".ativo");

console.log(classes);

// Retorne a linguagem do navegador

const language = window.navigator.language;

console.log(language);

// Retorne a largura da janela

const larguraPagina = document.body.offsetWidth;
const larguraPagina2 = window.innerWidth;

console.log(larguraPagina);
console.log(larguraPagina2);
