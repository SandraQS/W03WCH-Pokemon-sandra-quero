import Componente from "../Componente/Componente.js";

class Paginacion extends Componente {
  paginas;
  total;
  constructor(elementoPadre, paginas, total) {
    super(elementoPadre, "contenedor-paginacion__lista", "ul");
    this.paginas = 12;
    this.total = total;

    this.insertarHtml();
  }

  insertarHtml() {
    const paginacion = `
        <li class="contenedor-paginacion__paginas">${this.paginas}</li>
        <li class="contenedor-paginacion__total">${this.total}</li>
    `;
    this.elemento.innerHTML = paginacion;
  }
}

export default Paginacion;
