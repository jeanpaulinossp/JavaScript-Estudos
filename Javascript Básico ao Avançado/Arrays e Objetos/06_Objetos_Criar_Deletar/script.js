let pessoa = {
    nome: "Jean",
    idade: 28,
    profissao: "Contador",
}

console.log (pessoa.nome);
console.log (pessoa.idade);
console.log (pessoa.profissao);

delete pessoa.profissao; // deletar uma propriedade da função

pessoa.profissao = "Desenvolvedor"; // adicionar uma propriedade

console.log ('Antiga profissão Contador, agora é: ' + pessoa.profissao);