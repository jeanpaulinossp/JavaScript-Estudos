class cachorro {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir () {
        console.log ("Au Au");
    }
}

cachorro.prototype.patas = 4;

let labrador = new cachorro ('Labrador', 'Caramelo');

cachorro.prototype.raca = 'SRD';
cachorro.prototype.cor = 'Preta';

console.log (labrador.raca);
console.log (cachorro.prototype.raca);

console.log (cachorro.prototype);
console.log (labrador);

labrador.latir();