var idadeJean = 29;
var idadeFran = 31;

if (idadeJean > idadeFran) {
  console.log("Minha idade é maior que da minha irmã");
} else {
  console.log("A idade da maior irmã é maior");
}

var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

var nome = "Jean";
var idade = 29;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroAtoa = 0;

// !! é usado para saber se uma variável passada retorna true ou false
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroAtoa
);

var brasil = 207;
var china = 1340;

if (brasil >= china) {
  console.log("O Brasil tem mais habitantes!");
} else {
  console.log("A China tem mais habitantes!");
}

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
