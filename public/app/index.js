import Componente from "./Componente/Componente.js";
import Pokemon from "./Pokemon/Pokemon.js";
import ServiciosPokemon from "./ServiciosPokemon/ServiciosPokemon.js";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Boton from "./Boton/Boton.js";

const elementoPadrePrincipal = document.querySelector(".contenedor-principal");
const header = new Header(elementoPadrePrincipal, "Pokemon SQS");
const main = new Main(elementoPadrePrincipal, "Todos los pokemon");
const elementoPadrePokemons = document.querySelector(
  ".contenedor-pokemons__lista"
);
const elementoPadreBotones = document.querySelector("main");

// eslint-disable-next-line no-unused-vars
const contenedorPokemons = new Componente(
  elementoPadrePokemons,
  "contenedor-pokemons__lista",
  "ul"
);
const elementoPadrePokemon = document.querySelector(
  ".contenedor-pokemons__lista"
);

const infoPokemon = new ServiciosPokemon();

(async () => {
  const response = await infoPokemon.getPokemon();
  const arrayUrls = response.results.map((nuevaUrl) => {
    const urlPokemon = nuevaUrl.url;

    return urlPokemon;
  });

  arrayUrls.forEach(async (urlPokemon) => {
    const nuevoPokemon = await infoPokemon.getPokemon(urlPokemon);
    console.log(nuevoPokemon);
    new Pokemon(elementoPadrePokemon, {
      imagen: nuevoPokemon.sprites.other.dream_world.front_default,
      nombre:
        nuevoPokemon.name.charAt(0).toUpperCase() + nuevoPokemon.name.slice(1),
      numero: `#${nuevoPokemon.id}`,
      tipo:
        nuevoPokemon.types[0].type.name.charAt(0).toUpperCase() +
        nuevoPokemon.types[0].type.name.slice(1),
    });
  });
})();

function hola() {
  console.log("habla");
}

const botonAtras = new Boton(
  elementoPadreBotones,
  "boton-atras",
  "Atrás",
  hola
);
