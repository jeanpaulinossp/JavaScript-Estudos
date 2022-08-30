// Crie uma função para verificar se um valor é Truthy

function verificaValor(valor) {
  if (valor === true) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaValor(true));

function verificaValorOrigamig(valor) {
  return !!valor;
}

console.log(verificaValorOrigamig(true));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
  return lado * 4;
}

quadrado(10);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nome(nome, sobrenome) {
  return `O seu nome completo é: ${nome} ${sobrenome}`;
}

nome("Jean", "Paulino");

// Crie uma função que verifica se um número é par

function numPar(numero) {
  if (numero % 2 == 0) {
    return console.log("O numero digitado foi par");
  } else {
    return console.log("O numero digitado foi impar");
  }
}

numPar(5);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  console.log(typeof dado);
  return dado;
}

tipoDado("kkkk");

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function () {
  console.log("Jean Paulino");
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return console.log(
    `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  );
}
function jaVisitei(paisesVisitados) {
  return console.log(
    `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  );
}
precisoVisitar(20);
jaVisitei(20);
