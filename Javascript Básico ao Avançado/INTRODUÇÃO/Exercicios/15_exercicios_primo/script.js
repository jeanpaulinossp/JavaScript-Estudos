let numero = prompt ("Digite um número para saber se ele é primo ou não.");
let divisores = 0;

for (let  i = 1; i <= numero ; i++) {
    
    if (numero % i == 0){
        divisores++;
    }      
}
    if (divisores == 2) {
        console.log (`O numero ${numero} é primo!`)
    }
    else{
        console.log (`O numero ${numero} não é primo!`)
    }
    
