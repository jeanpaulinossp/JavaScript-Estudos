// dessa forma fica mais fácil de reaproveitar a função

function Dom(seletor) {
  this.element = function () {
    // cria um seletor de classe
    return document.querySelector(seletor);
  };

  this.ativar = function (classe) {
    // implementa a função adicionar classe no seletor
    this.element().classList.add(classe);
  };
}

const li = new Dom("li");
const lastLi = new Dom("li:last-child");
const ul = new Dom("ul");

li.ativar("ativo");
lastLi.ativar("poroyal");
ul.ativar("ativo");


//______________________________________________________________________________________________________________

// const Dom = {
//   seletor: "li",
//   element() {
//     // cria um seletor de classe
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     // implementa a função adicionar classe no seletor
//     this.element().classList.add("ativar");
//   },
// };

// // como é uma função normal, para reaproveita-la tem que ficar setando a variável novamente, não sendo muito usual.
// Dom.ativar();
// Dom.seletor = 'ul';
// Dom.ativar;
