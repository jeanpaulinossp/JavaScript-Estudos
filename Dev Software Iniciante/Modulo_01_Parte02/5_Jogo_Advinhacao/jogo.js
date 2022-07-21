/*
1: Gerar um número aleatório entre 1 e 100;
2: Inicializar o número de tantivas como 10;
3: Pedir ao jogador para tentar adivinha o número;
4: Decrementar o número de tentativas;
5: Verificar se a tentativa está correta
    - Se estiver correta: 
        * Informar que acertou;
        * Encerrar o jogo.
    - Se estiver incorreta:
        * Informar que ele errou;
        * Informar se o número que ele informou é maior ou menor que o número correto;
        * Tentar novamente;
    - Se acabou as tentivas:
        * Informar que não acertou;
        * Encerrar o jogo.
*/

// Math.round (arrenda o número)
// Math.random (gera um número aleatório entre 0 e 1)
// readline é uma bibliota do JS que permite usar o input e output
// input e output permite digitar uma pergunta no terminal e ao usuário digitar um número
// rl.question mostrara uma pergunta no terminal
let readline = require ("readline");
let rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});
let numAleatorio = Math.round (Math.random () * 99 + 1);
let numTentativas = 10;

console.log ("BEM VINDO AO JOGO DA ADIVINHAÇÃO. DIGITE UM NUMERO ENTRE 1 E 100");

pergunta (); // função criada para poder executar o jogo várias vezes

function pergunta () {
rl.question ("Digite um número: ", function (numero) {
    numero = parseInt (numero);
    numTentativas = numTentativas - 1; //numTentativas--
    if (numero === numAleatorio) {
        console.log ("Parabéns, você acertou! Pode ir retirar o prémio");
        rl.close; //o .close encerra o programa caso esteja certo.
    } 
    else if (numTentativas === 0) {
        console.log ("Que pena, você não descobriu e suas tentativas acabaram!");
        rl.close;
    }
    else if (numero > numAleatorio) {
        console.log ("Você errou, o número informado é maior que o sorteador, porém ainda tem " + numTentativas+ " tentativas");
        pergunta (); //chama a função novamente para que o usuário digite uma nova tentativa;
    } else {
        console.log ("Você errou, o número informado é menor que o sorteador, porém ainda tem " + numTentativas+ " tentativas");
        pergunta (); //chama a função novamente para que o usuário digite uma nova tentativa;
    }
});
}