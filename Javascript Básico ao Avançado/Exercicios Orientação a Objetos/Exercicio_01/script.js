class Conta {
    constructor (saldo) {
        this.saldo = saldo;
    }
deposito (valor) {
    this.saldo += valor;
    }
saque (valor) {
    this.saldo -= valor;
}
}

let conta = new Conta (1000);

conta.deposito (1500);
conta.saque (500)

console.log (`O saldo da sua conta atualmente é de: ` + conta.saldo);

