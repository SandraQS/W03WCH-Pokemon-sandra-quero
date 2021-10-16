import Main from "./Main";

describe("Dada la clase Main", () => {
  describe("Cuando recibe un elemento padre div y un titulo", () => {
    test("Deberia renderizar una section con un h2 con el titulo dentro.", () => {
      const elementoPadre = document.createElement("div");
      const titulo = "Hola";

      // eslint-disable-next-line no-unused-vars
      const main = new Main(elementoPadre, titulo);

      const resultado = elementoPadre.querySelector("main.main");
      expect(resultado).not.toBeNull();
    });
  });
});
