import Componente from "../Componente/Componente.js";

class Header extends Componente {
  titular;
  constructor(elementoPadre, titular) {
    super(elementoPadre, "header-principal", "header");
    this.titular = titular;

    this.insertarHtml();
  }

  insertarHtml() {
    const h1 = `
        <h1 class="header-principal__titular">${this.titular}</h1>
    `;
    this.elemento.innerHTML = h1;
  }
}

export default Header;
