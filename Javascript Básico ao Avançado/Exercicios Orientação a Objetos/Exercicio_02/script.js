class Carrinho {
    constructor (itens, quantidade, total) {
        this.itens = itens;
        this.quantidade = quantidade;
        this.total = total;
    }
    addItem (item) {

        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens [itemCarrinho].id == item.id) {
                this.itens [itemCarrinho].quantidade += item.quantidade;
                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push (item);
        }

    this.quantidade += item.quantidade;
    this.total += item.preco * item.quantidade;
    }

    removeItem (item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens [itemCarrinho].id == item.id) {
                let obj = this.itens [itemCarrinho];
                let index = this.itens.findIndex (function(obj) {
                    return obj.id == item.id
                });

                this.quantidade -= this.itens[itemCarrinho].quantidade;
                this.total -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

                this.itens.splice (index, 1);

            }
        }
    }
}

let carrinho = new Carrinho ([
    {
        id: 01,
        nome: "Camisa",
        quantidade: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        quantidade: 1,
        preco: 50
    }
], 3, 120);

console.log (carrinho);

carrinho.addItem ({id:01, nome: "Camisa", quantidade: 2, preco: 20});

console.log (carrinho);

carrinho.addItem ({id:03, nome: "Boné", quantidade: 1, preco: 15});

console.log (carrinho);

carrinho.removeItem ({id:01, nome: "Camisa", quantidade: 2, preco: 20});

console.log (carrinho);
