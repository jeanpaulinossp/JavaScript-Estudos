// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll("a[href^='#']");

function addClasse(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", addClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const elements = document.querySelectorAll("body *");
console.log(elements);

function bodyElements(event) {
  console.log(event.currentTarget); // exibe na tela a informação do elemento clicado
  event.currentTarget.remove(); // remove o elemento clicado
}

elements.forEach((element) => {
  element.addEventListener("click", bodyElements);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  if (event.key === "t" || event.ley === "T") {
    document.documentElement.classList.toggle("textomaior");
  }
}
window.addEventListener("keydown", handleClickT);
