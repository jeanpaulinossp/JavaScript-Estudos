function identifica (tipo) {
    if (typeof tipo === 'string') {
        console.log ("Este dado é uma string!");
    }
    else if (typeof tipo === 'number') {
        console.log ("Este dado é um Number");
    }
    else if (typeof tipo === 'boolean') {
        console.log ("Este dado é um boolean");
    }
}

identifica(true);
identifica (23);
identifica("Teste");