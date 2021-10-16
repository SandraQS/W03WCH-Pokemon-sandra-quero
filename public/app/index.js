import Componente from "./Componente/Componente.js";
import Pokemon from "./Pokemon/Pokemon.js";
import ServiciosPokemon from "./ServiciosPokemon/ServiciosPokemon.js";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Boton from "./Boton/Boton.js";

let contador = 0;
const elementoPadrePrincipal = document.querySelector(".contenedor-principal");
const header = new Header(elementoPadrePrincipal, "Pokemon SQS");
const main = new Main(elementoPadrePrincipal, "Todos los pokemon");
const elementoPadreBotones = document.querySelector("main");
const elementoPAdreContenedor = document.querySelector(".contenedor-pokemons");

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
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=∆${nuevoOffset}`
  );

  (async () => {
    const response = await infoPokemon.getPokemon();
    const arrayUrls = response.results.map((nuevaUrl) => {
      const urlPokemon = nuevaUrl.url;

      return urlPokemon;
    });

    arrayUrls.forEach(async (urlPokemon) => {
      const nuevoPokemon = await infoPokemon.getPokemon(urlPokemon);
      new Pokemon(elementoPadrePokemons, {
        imagen: nuevoPokemon.sprites.other.dream_world.front_default,
        nombre:
          nuevoPokemon.name.charAt(0).toUpperCase() +
          nuevoPokemon.name.slice(1),
        numero: `#${nuevoPokemon.id}`,
        tipo:
          nuevoPokemon.types[0].type.name.charAt(0).toUpperCase() +
          nuevoPokemon.types[0].type.name.slice(1),
      });
    });
  })();
};

function siguiente() {
  if (contador !== 100) {
    elementoPadrePokemons.innerHTML = "";
    contador += 10;
    mostrarTodo(contador);
  }
}

mostrarTodo(contador);

const botonAtras = new Boton(
  elementoPadreBotones,
  "boton-siguiente",
  "Siguiente",
  siguiente
);
