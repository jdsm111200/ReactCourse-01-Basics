import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Test 02-template-string", () => {
  test("getSaludo must return Hola Fernando", () => {
    //1. Inicialización (Arrange)
    const nombre = "Fernando";
    

    //2. Estímulo (Act)
    const message = getSaludo(nombre);

    //3. Observar el comportamiento (Assert)
    expect(message).toBe(`Hola ${nombre}`);
  });
});
