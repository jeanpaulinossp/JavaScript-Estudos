// Retorne no console todas as imagens do site

console.log("Exercicios");

const images = document.querySelectorAll("img");
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll("a[href^='#']");
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao

const animaisDescricao = document.querySelector(".animais-descricao h2");
console.log(animaisDescricao);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
