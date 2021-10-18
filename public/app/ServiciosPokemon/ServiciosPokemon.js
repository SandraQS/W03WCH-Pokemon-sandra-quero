class ServiciosPokemon {
  urlPokemonAppi = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`;
  miApi = `https://appi-pokemon-sqs.herokuapp.com/pokemon/`;

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

  async postPokemon(objeto) {
    console.log(objeto);
    const response = await fetch(this.miApi, {
      method: "POST",
      body: JSON.stringify(objeto),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    const pokemonCapturado = await response.json();
    console.log(pokemonCapturado);
    return pokemonCapturado;
  }
}
export default ServiciosPokemon;
