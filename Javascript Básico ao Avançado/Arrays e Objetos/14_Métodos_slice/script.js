let numeros = [9,8,7,6,5,4,3,2,1,0];

    console.log (numeros.slice (4,5)); // primeiro numero apresentado é onde vai começar e o ultimo é onde vai parar
    console.log (numeros.slice (4,6));
    console.log (numeros.slice (4)); // se não tiver um stop, ele traz todos os numeros a partir do elemento apresentado

    console.log (numeros.slice (-4,)); // o numero negativo faz inverter os elementos
    console.log (numeros.slice (3,-2));