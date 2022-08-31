// Retorne no console todas as imagens do site

console.log("Exercicios");

const images = document.querySelectorAll("img");
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem

images.forEach(function (item, index) {
  if (item.localName) {
    console.log(item.namespaceURI);
    console.log(index);
  }
});

// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site
