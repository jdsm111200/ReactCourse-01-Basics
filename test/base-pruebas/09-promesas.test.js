import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test 09-promesas", () => {
  test("getHeroeByIdAsync should return an hero if exists", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      //alternativa de asyn await para esperar la respuesta
      done();
    });
  });

  test("getHeroeByIdAsync should return an error if hero does not exist", (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        //expect(error).toBe(expect.any(Error));
        done();
      });
  });
});
