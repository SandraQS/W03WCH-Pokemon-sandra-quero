class ServiciosPokemon {
  urlPokemonAppi = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`;
  constructor(urlPokemonAppi) {
    this.urlPokemonAppi = urlPokemonAppi;
  }

  async getPokemon(url) {
    if (url) {
      const segundaResponse = await fetch(url);
      const infoPokemonIndividual = await segundaResponse.json();

      return infoPokemonIndividual;
    }
    const primeraResponse = await fetch(this.urlPokemonAppi);
    const infoPokemon = await primeraResponse.json();

    return infoPokemon;
  }
}
export default ServiciosPokemon;
