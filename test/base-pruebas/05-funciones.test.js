import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Test 05-funciones", () => {
  test("getUser must return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo must return an object", () => {
    const nombre = "Juan";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(userTest);
  });
});
