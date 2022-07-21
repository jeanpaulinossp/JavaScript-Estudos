class Conta {
    constructor (saldoCC, saldoPP, juros) {
        this.saldoCC = saldoCC;
        this.saldoPP = saldoPP;
        this.juros = juros;
    }
    
    saqueCC (valor) {
        this.saldoCC -= valor;
    }
    depositoCC (valor) {
        this.saldoCC += valor;
    }
    saquePP (valor) {
        this.saldoPP -= valor;
    }
    depositoPP (valor) {
        this.saldoPP += valor;
    }
    transferenciaPP (valor) {
        this.saldoCC -= valor;
        this.saldoPP += valor;
    }
    transferenciaCC (valor) {
        this.saldoPP -= valor;
        this.saldoCC += valor;
    }
    jurosAniversarioPP () {
        let juros = (this.saldoPP * this.juros) / 100;
        this.saldoPP += juros;
    }
}

class contaEspecial extends Conta {
    constructor (saldoCC, saldoPP, juros) {
        super (saldoCC, saldoPP, juros*2)
    }
}

let conta = new Conta (1000, 10000, 1);
    console.log (conta);

conta.saqueCC (500);
conta.depositoPP (1000);
conta.jurosAniversarioPP ();
    console.log (conta);

conta.transferenciaCC (500);
    console.log (conta);

let conta2 = new contaEspecial (10000, 50000, 1);
    console.log (conta2);

conta2.jurosAniversarioPP ();
    console.log (conta2);
