let numero = process.argv[2];
let divisores = 0;

for (let  i = 1; i <= numero ; i++) {
    
        console.log ("Esse é o i incrementado: " + i);
        console.log ("Esse é o numero: " + numero)
        console.log ("Esse é o divisor sem incremento: " + divisores)

    if (numero % i == 0){
        divisores++;
        console.log ("Esse é o divisor incrementado: " + divisores)
    }      
}
    if (divisores == 2) {
        console.log (`O numero ${numero} é primo!`)
    }
    else{
        console.log (`O numero ${numero} não é primo!`)
    }

