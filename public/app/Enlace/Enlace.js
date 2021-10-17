import Componente from "../Componente/Componente.js";

class Enlace extends Componente {
  link;
  titulo;
  constructor(elementoPadre, link, titulo) {
    super(elementoPadre, "contenedor-pokemons__lista", "ul");
    this.link = link;
    this.titulo = titulo;

    this.insertarHtml();
  }

  insertarHtml() {
    const a = `
        <li><a href="${this.link}" class="contenedor-pokemons__pokedex">
     ${this.titulo}
   </a></li>
    `;
    this.elemento.innerHTML = a;
  }
}

export default Enlace;
