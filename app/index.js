import Componente from "./Componente/Componente.js";
import Pokemon from "./Pokemon/Pokemon.js";
import ServiciosPokemon from "./ServiciosPokemon/ServiciosPokemon.js";

const elementoPadre = document.querySelector(".contenedor-pokemons__lista");
// eslint-disable-next-line no-unused-vars
const prueba = new Componente(elementoPadre, "datos-pokemon", "li");
const elementoPadrePokemon = document.querySelector(
  ".contenedor-pokemons__lista"
);
// eslint-disable-next-line no-unused-vars
const tarjetaPokemon = new Pokemon(elementoPadrePokemon, {
  imagen: "hola",
  nombre: "Charmander",
  numero: "#000",
  tipo: "fuego",
});

const infoPokemon = new ServiciosPokemon();

(async () => {
  const response = await infoPokemon.getPokemon();
  const arrayUrls = response.results.map((nuevaUrl) => {
    const urlPokemon = nuevaUrl.url;
    // console.log(urlPokemon);
    return urlPokemon;
  });
  // console.log(arrayUrls);
  arrayUrls.forEach(async (urlPokemon) => {
    const nuevoPokemon = await infoPokemon.getPokemon(urlPokemon);
    console.log(nuevoPokemon);
  });
})();

// (async () => {
//   const data = await infoPokemon.getPokemon();
//   const URLArray = data.results.map((pokemonFirstObject) => {
//     const pokemonInfoURL = pokemonFirstObject.url;
//     return pokemonInfoURL;
//   });
//   URLArray.forEach(async (url) => {
//     const pokemonDetail = await infoPokemon.getPokemon(url);
//     console.log(pokemonDetail);
//   });
// })();
