class cachorro {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

let labrador = new cachorro ('Labrador', 'Preto');
    console.log (labrador.raca);
    console.log (labrador.cor);

class filhote extends cachorro {
    constructor (raca, cor) {
        super (raca, raca);
        this.cor = cor;
    }
    latir () {
        console.log ("Au Au");
    }
}

let filhotinho = new filhote ('Vira-Lata', 'Sem cor');
    console.log (filhotinho.raca);
    console.log (filhotinho.cor);
    filhotinho.latir ();

console.log (new filhote instanceof cachorro); // utilizado pra saber se um objeto é instanciado pelo outro
console.log (filhotinho instanceof cachorro);
console.log (cachorro instanceof filhote);