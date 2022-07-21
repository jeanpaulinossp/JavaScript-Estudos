function soma (a,b) {

    if ( a === undefined || b === undefined) {
        console.log ("Essa função precisa ter os dois argumentos!");
    }
    else {
        return a + b;
    }
}
        console.log (soma (1));
        console.log (soma (1,2));


function saudacao (nome, idade) {
    if (idade === undefined) {
        console.log ("Hello " + nome);
    }
    else {
        console.log ("Hello " + nome + " você tem " + idade + " anos");
    }
}
        saudacao ("Jean");
        saudacao ("João", 29);
        