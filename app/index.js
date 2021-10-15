import Componente from "./Componente/Componente.js";
import Pokemon from "./Pokemon/Pokemon.js";
import ServiciosPokemon from "./ServiciosPokemon/ServiciosPokemon.js";

const elementoPadre = document.querySelector(".contenedor-pokemons__lista");
// eslint-disable-next-line no-unused-vars
const prueba = new Componente(elementoPadre, "datos-pokemon", "li");
const elementoPadrePokemon = document.querySelector(
  ".contenedor-pokemons__lista"
);
const tarjetaPokemon = new Pokemon(elementoPadrePokemon, {
  imagen: "hola",
  nombre: "Charmander",
  numero: "#000",
  tipo: "fuego",
});

const prueba2 = new ServiciosPokemon();

(async () => {
  const response = await prueba2.getPokemon();
  const primeraUrl = response.results[1].url;
  console.log(primeraUrl);
})();
