class cachorro {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    get verRaca () {
        return 'A raca é ' + this.raca;
    }
    set novaRaca (value) {
        this.raca = value;
    }
}

let vr = new cachorro ('Vira-Latas');
console.log (vr.verRaca);
vr.novaRaca = 'Mestiço';

console.log (vr.verRaca);