import Componente from "../Componente/Componente.js";

class Pokemon extends Componente {
  imagen;
  nombre;
  numero;
  tipo;
  constructor(elementoPadre, { imagen, nombre, numero, tipo }) {
    super(elementoPadre, "datos-pokemon", "li");
    this.imagen = imagen;
    this.nombre = nombre;
    this.numero = numero;
    this.tipo = tipo;

    this.insertarHtml();
  }

  insertarHtml() {
    const infoPokemon = `
        <img src="" alt="" class="datos-pokemon__imagen" />
        <h2 class="datos-pokemon__titulo">${this.nombre}</h2>
        <p class="datos-pokemon__numero">${this.numero}</p>
        <p class="datos-pokemon__tipo">${this.tipo}</p>
    `;
    this.elemento.innerHTML = infoPokemon;
  }
}

export default Pokemon;