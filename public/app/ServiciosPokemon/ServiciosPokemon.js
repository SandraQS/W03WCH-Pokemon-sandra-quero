class ServiciosPokemon {
  urlPokemonAppi = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`;
  constructor(urlPokemonAppi) {
    this.urlPokemonAppi = urlPokemonAppi;
  }

  async getPokemon(url) {
    if (url) {
      const response = await fetch(url);
      const infoPokemonIndividual = await response.json();

      return infoPokemonIndividual;
    }
    const response = await fetch(this.urlPokemonAppi);
    const infoPokemon = await response.json();

    return infoPokemon;
  }
}
export default ServiciosPokemon;
