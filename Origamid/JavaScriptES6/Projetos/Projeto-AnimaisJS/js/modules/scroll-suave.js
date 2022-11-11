// scroll suave ao clicar nos links internos
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSelection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // }); // função que faz um scroll do site ( eixo x < > e eixo y \/ /\ )
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSelection);
  });
}
