class ServiciosPokemon {
  urlPokemonAppi = "https://pokeapi.co/api/v2/pokemon";

  async getPokemon() {
    const response = await fetch(this.urlPokemonAppi);
    const infoPokemon = await response.json();
    console.log(infoPokemon);
    return infoPokemon;
  }
}
export default ServiciosPokemon;
