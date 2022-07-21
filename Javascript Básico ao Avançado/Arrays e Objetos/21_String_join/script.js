let frase = "Testando o método join";

let palavras = frase.split (" ");

let novaFrase = palavras.join ("@"); //separador informado pelo desenvolvedor

console.log (novaFrase);

console.log (palavras.join (" ")); // espaço é o separador nesse caso