let pessoa = {
    nome: "Jean"
}

let pessoa2 = pessoa;

console.log (pessoa == pessoa2);

pessoa2.nome = "Jean";

console.log (pessoa.nome);

pessoa.nome = "Maria";

console.log (pessoa2.nome);