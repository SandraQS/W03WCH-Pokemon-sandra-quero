class ServiciosPokemon {
  urlPokemonAppi = "https://pokeapi.co/api/v2/pokemon";

  async getPokemon(url) {
    if (url) {
      const response = await fetch(url);
      const infoPokemonIndividual = await response.json();
      // console.log(infoPokemon);
      return infoPokemonIndividual;
    }
    const response = await fetch(this.urlPokemonAppi);
    const infoPokemon = await response.json();
    // console.log(infoPokemon);
    return infoPokemon;
  }
}
export default ServiciosPokemon;
