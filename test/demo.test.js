describe("Prueba <DemoComponent/>", () => {
  test("Esta prueba no debe de fallar", () => {
    //1. Inicialización (Arrange)
    const message = "Hola Mundo";

    //2. Estímulo (Act)
    const message2 = message.trim();

    //3. Observar el comportamiento (Assert)
    expect(message).toBe(message2);
  });
});
