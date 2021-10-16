import Componente from "./Componente";

describe("Dada la clase Componente", () => {
  describe("Cuando recibe un elemento padre div, un nombre de clase y una etiqueta html p", () => {
    test("Deberia renderizar un elemento p dentro de div.", () => {
      const elementoPadre = document.createElement("div");
      const className = "contenedor";
      const tagName = "p";

      // eslint-disable-next-line no-unused-vars
      const parrafo = new Componente(elementoPadre, className, tagName);

      const resultado = elementoPadre.querySelector("p.contenedor");
      expect(resultado).not.toBeNull();
    });
  });
});
