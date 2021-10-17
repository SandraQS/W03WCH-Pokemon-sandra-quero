import Componente from "../Componente/Componente.js";

class Pokemon extends Componente {
  imagen;
  nombre;
  numero;
  tipo;
  capturado = false;
  contenedorBoton;
  imagenMarcador;

  constructor(elementoPadre, { imagen, nombre, numero, tipo }) {
    super(elementoPadre, "datos-pokemon", "li");
    this.imagen = imagen;
    this.nombre = nombre;
    this.numero = numero;
    this.tipo = tipo;
    this.capturado = false;

    this.insertarHtml();
  }

  insertarHtml() {
    const infoPokemon = `
        <div class="datos-pokemon__contenedor-imagen">
          <img src="${this.imagen}" alt="" class="datos-pokemon__imagen" />
        </div>
        <div class="datos-pokemon__contenedor-marcador">        
        </div>
        <p class="datos-pokemon__numero">${this.numero}</p>
        <h2 class="datos-pokemon__titulo">${this.nombre}</h2>
        <p class="datos-pokemon__tipo">${this.tipo}</p>
    `;
    this.elemento.innerHTML = infoPokemon;
    this.contenedorBoton = this.elemento.querySelector(
      ".datos-pokemon__contenedor-marcador"
    );
  }
}

export default Pokemon;
