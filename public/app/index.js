import Componente from "./Componente/Componente.js";
import Pokemon from "./Pokemon/Pokemon.js";
import ServiciosPokemon from "./ServiciosPokemon/ServiciosPokemon.js";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Boton from "./Boton/Boton.js";
import Paginacion from "./Paginacion/Paginacion.js";

let contador = 0;
let numeroPokemon = 12;
const elementoPadrePrincipal = document.querySelector(".contenedor-principal");
const header = new Header(elementoPadrePrincipal, "Pokemon SQS");
const main = new Main(elementoPadrePrincipal, "Todos los pokemon");
const mainContenedor = document.querySelector("main");
const elementoPAdreContenedor = document.querySelector(".contenedor-pokemons");
const section = new Componente(
  mainContenedor,
  "contenedor-paginacion",
  "section"
);
const elementoPadreBotones = document.querySelector(".contenedor-paginacion");

// eslint-disable-next-line no-unused-vars
const contenedorPokemons = new Componente(
  elementoPAdreContenedor,
  "contenedor-pokemons__lista",
  "ul"
);
const elementoPadrePokemons = document.querySelector(
  ".contenedor-pokemons__lista"
);

const mostrarTodo = (nuevoOffset) => {
  const infoPokemon = new ServiciosPokemon(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${nuevoOffset}`
  );

  (async () => {
    const response = await infoPokemon.getPokemon();
    const arrayUrls = response.results.map((nuevaUrl) => {
      const urlPokemon = nuevaUrl.url;
      return urlPokemon;
    });

    arrayUrls.forEach(async (urlPokemon, index) => {
      const nuevoPokemon = await infoPokemon.getPokemon(urlPokemon);
      const pokemonIndividual = new Pokemon(elementoPadrePokemons, {
        imagen: nuevoPokemon.sprites.other.dream_world.front_default,
        nombre:
          nuevoPokemon.name.charAt(0).toUpperCase() +
          nuevoPokemon.name.slice(1),
        numero: `#${("00" + nuevoPokemon.id).slice(-3)}`,
        tipo:
          nuevoPokemon.types[0].type.name.charAt(0).toUpperCase() +
          nuevoPokemon.types[0].type.name.slice(1),
      });

      const elementoPadreCapturar = document.querySelectorAll(
        ".datos-pokemon__contenedor-marcador"
      );

      const botonCapturarPokemon = new Boton(
        pokemonIndividual.contenedorBoton,
        "datos-pokemon__boton-marcador",
        `<img src="media/pokeball.png" alt="" class="datos-pokemon__marcador" />`,
        capturarPokemon
      );
      const botonMarcador = document.querySelectorAll(
        ".datos-pokemon__marcador"
      );

      async function capturarPokemon() {
        if (pokemonIndividual.capturado) {
          botonMarcador[index].classList.remove("datos-pokemon__marcador--on");
          pokemonIndividual.capturado = false;
          console.log(pokemonIndividual.capturado);
          //delete
        } else {
          botonMarcador[index].classList.add("datos-pokemon__marcador--on");
          pokemonIndividual.capturado = true;
          console.log(pokemonIndividual.capturado);
          //añadir
        }
      }
    });
  })();
};

function siguiente() {
  if (contador !== 1118) {
    elementoPadrePokemons.innerHTML = "";
    contador += 12;
    mostrarTodo(contador);
    contadorPaginacion(contador + 12);
  }
}

function atras() {
  if (contador !== 0) {
    elementoPadrePokemons.innerHTML = "";
    contador -= 12;
    mostrarTodo(contador);
    contadorPaginacion(contador);
  }
}

mostrarTodo(contador);

const botonAtras = new Boton(elementoPadreBotones, "boton-atras", "<", atras);

const paginacion = new Paginacion(elementoPadreBotones, contador, `...1118`);

function contadorPaginacion(contadorPaginas) {
  paginacion.paginas = contadorPaginas;
  paginacion.insertarHtml();
}

const botonSiguiente = new Boton(
  elementoPadreBotones,
  "boton-siguiente",
  ">",
  siguiente
);

//<button class="datos-pokemon__boton-marcador"> </button>
