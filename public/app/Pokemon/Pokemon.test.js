import Pokemon from "./Pokemon";

describe("Dada la clase Pokemon", () => {
  describe("Cuando recibe un elemento padre div, un objeto con propiedades", () => {
    test("Deberia renderizar una li todos los datos de pokemon dentro.", () => {
      const elementoPadre = document.createElement("div");
      const objeto = {
        imagen: "#",
        nombre: "Charmander",
        numero: "#001",
        tipo: "fuego",
      };

      // eslint-disable-next-line no-unused-vars
      const pokemon = new Pokemon(elementoPadre, objeto);

      const resultado = elementoPadre.querySelector("li.datos-pokemon");
      expect(resultado).not.toBeNull();
    });
  });
});
