class ServiciosPokemonLocal {
  urlLocal = `https://appi-pokemon-sqs.herokuapp.com/pokemon`;
  constructor(urlPokemonAppi) {
    this.urlLocal = urlPokemonAppi;
  }

  async getPokemon() {
    const primeraResponse = await fetch(this.urlLocal);
    const infoPokemon = await primeraResponse.json();

    return infoPokemon;
  }
}
export default ServiciosPokemonLocal;
