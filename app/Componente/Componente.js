class Componente {
  elemento;
  elementoPadre;

  constructor(elementoPadre, className, etiquetaHtml) {
    this.elementoPadre = elementoPadre;
    this.elemento = document.createElement(etiquetaHtml);
    this.elemento.className = className;
    this.elementoPadre.append(this.elemento);
  }
}

export default Componente;
