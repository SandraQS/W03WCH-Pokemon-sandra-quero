import Componente from "../Componente/Componente.js";

class Main extends Componente {
  titulo;
  constructor(elementoPadre, titulo) {
    super(elementoPadre, "main", "main");
    this.titulo = titulo;

    this.insertarHtml();
  }

  insertarHtml() {
    const secion = `
        <section class="contenedor-pokemons">
          <h2 class="contenedor-pokemons__titulo">${this.titulo}</h2>
          
        </section>
    `;
    this.elemento.innerHTML = secion;
  }
}

export default Main;
