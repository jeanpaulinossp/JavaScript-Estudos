let pessoa = {
    "nome": "Jean",
    "idade": 28,
    "profissao": "Desenvolvedor",
    "hobbies": ["Video Game", "Animes", "Mangas"]
}

let pessoaTexto = JSON.stringify (pessoa);

console.log (pessoaTexto);

//JSON PARA STRING /\
//STRING PARA JSON \/

let pessoaJSON = JSON.parse (pessoaTexto);

console.log (pessoaJSON);

console.log (pessoaJSON.hobbies[0]);