import Componente from "../Componente/Componente.js";

class Boton extends Componente {
  textoBoton;
  accionClick;
  constructor(elementoPadre, className, textoBoton, accionClick) {
    super(elementoPadre, className, "button");
    this.textoBoton = textoBoton;
    this.accionClick = accionClick;
    this.elemento.innerHTML = textoBoton;
    this.elemento.addEventListener("click", this.accionClick);
  }
}

export default Boton;
