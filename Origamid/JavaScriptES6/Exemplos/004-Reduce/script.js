const aulas = [10, 25, 30];

const retorno = aulas.reduce((acumulador, item, index, array) => {
  return acumulador + item;
}, 0 /*esse é o valor do acumulador inicial*/);

console.log(retorno);

// o 0 é do acumulador, depois no próximo retorno, ele pega o 0 e soma com o primeiro item, retornando 10, depois com o segundo item (10 + 25) e por ai vai
// quando o acumulador não é passado o reduce usa o primeiro valor como acumulador
// o acumulador pode ser passado como um objeto vazio {} ou uma array [] para ser copulado com dados
// o reduce retorna somente o ultimo valor da iteração feita

const numeros = [10, 25, 30, 4, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
});

console.log("O Maior numero é:", maiorNumero);
