// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll(".menu a");

menu.forEach((item) => {
  item.classList.add("ativo");
});

console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");
console.log(menu);

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  let possuiAlt = item.hasAttribute("alt");
  console.log(item, possuiAlt);
});

// Modifique o href do link externo no menu

const link = document.querySelectorAll(".menu a");
const modificacao = link[link.length - 1];

modificacao.setAttribute("href", "Ce ta doido");

//ou

const link2 = document.querySelector("a[href^='http']");
link2.setAttribute("href", "Ce ta doido");
