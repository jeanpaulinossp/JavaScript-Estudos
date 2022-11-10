// nomeie 3 propriedades ou métodos de strings

var metodosString = "Frase";

console.log(metodosString.length);
console.log(metodosString.toLocaleLowerCase());
console.log(metodosString.toLocaleUpperCase());
console.log(metodosString.indexOf("se"));

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  btn.classList.add("azul"); // adiciona uma classe ao elemento
  btn.innerHTML = "Outro texto"; // altera o texto do elemento
  btn.addEventListener("click", function () {
    btn.classList.remove("azul");
    btn.innerHTML = "Ce ta doido"; // altera o texto do elemento
  });
});

//addEventListener
//classList.add
//classList.remove
//innerHTML
//querySelector

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// bibilioteca clipboard
