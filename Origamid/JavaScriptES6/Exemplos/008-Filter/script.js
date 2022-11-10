const frutas = ["Banana", undefined, "Pera", null, "Uva", "Maçã"];

const arrayLimpa = frutas.filter((fruta) => {
  return fruta;
});

console.log(arrayLimpa);

// retorna os itens verdadeiros de acordo com os parametros passados, filtrando aqueles que retornam false
