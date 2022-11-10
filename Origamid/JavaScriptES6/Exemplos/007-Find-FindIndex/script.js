const frutas = ["Banana", "Pera", "Uva", "Maçã"];

const buscaUva = frutas.find((fruta) => {
  return fruta === "Uva";
});

console.log(buscaUva);

// o find retorna o valor do item quando for verdadeiro

const buscaUva2 = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});

console.log(buscaUva2);

// o findIndex retorna o index do item quando for verdadeiro
