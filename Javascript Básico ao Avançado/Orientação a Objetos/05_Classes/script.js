let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function () {
        console.log ("Au Au");
    }
}

let labrador = Object.create (cachorro);
let pastorAlemao = Object.create (cachorro);
let huskySiberiano = Object.create (cachorro);
let viraLata = Object.create (cachorro);

labrador.raca = 'Labrador';
pastorAlemao.raca = 'Pastor Alemão';
huskySiberiano.raca = 'Husky Siberiano';
viraLata.raca = 'Vira Lata';

console.log (cachorro.raca); //Mesmo definido as raças, para puxar elas tem que puxar a raça no Console

console.log (labrador.raca);
console.log (pastorAlemao.raca);
console.log (huskySiberiano.raca);
console.log (viraLata.raca);

labrador.latir ();
