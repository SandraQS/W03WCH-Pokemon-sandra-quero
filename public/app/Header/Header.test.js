import Header from "./Header";

describe("Dada la clase Header", () => {
  describe("Cuando recibe un elemento padre div y un titular", () => {
    test("Deberia renderizar h1 con el titular dentro.", () => {
      const elementoPadre = document.createElement("div");
      const titular = "Hola";

      // eslint-disable-next-line no-unused-vars
      const header = new Header(elementoPadre, titular);

      const resultado = elementoPadre.querySelector("header.header-principal");
      expect(resultado).not.toBeNull();
    });
  });
});
