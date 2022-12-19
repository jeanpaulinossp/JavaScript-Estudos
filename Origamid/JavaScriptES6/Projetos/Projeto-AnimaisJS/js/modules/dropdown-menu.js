import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(data) {

    this.dropdownMenus = document.querySelectorAll(data);
  }

  dropdownMenus.forEach((menu) => {
    // foreach para ativar vários eventos de uma única vez
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    // essa arrow function é usada pelo callback da próxima função
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
