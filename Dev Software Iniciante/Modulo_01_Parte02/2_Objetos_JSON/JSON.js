let pessoa = {
    nome: "Jean Paulino",
    idade: 28,
    profissao: "Desenvolvedor Iniciante",
    hobbies: ["Animes", "Séries", "Viajar"],
    pets: ["Konan", "Kiuuby", "Aika", "Natsu"]
        
    };

console.log (pessoa);
console.log (pessoa.nome);

pessoa.profissao = pessoa.profissao + " e Contador."

console.log (pessoa.profissao);

/* function SalvarDadosPessoa (pessoa) {
    console.log ("Esses console.log é da function " + pessoa.nome)
}

SalvarDadosPessoa (pessoa); */

pessoa.curso = "Bootcamp de Software Iniciante";

console.log (pessoa);

console.log (JSON.stringify(pessoa)); // Essa parte do código transforma a function em string

