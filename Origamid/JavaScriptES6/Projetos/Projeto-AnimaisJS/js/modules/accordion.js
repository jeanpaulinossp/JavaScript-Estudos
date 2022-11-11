// abrir e fechar menus do faq
export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeList = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeList);
    accordionList[0].nextElementSibling.classList.add(activeList);

    function activeAccordion() {
      this.classList.toggle(activeList); // adiciona a classe ativo na tag dt que esta sendo selecionada acima
      this.nextElementSibling.classList.toggle(activeList); // adiciona a classe ativo ao próximo elemento depois do dt (tag dd)
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
