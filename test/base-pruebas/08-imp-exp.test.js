import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Test 08-imp-exp", () => {
  test("getHeroeById should return an object if exists", () => {
    const id = 1;
    const heroeTest = getHeroeById(id);
    expect(heroeTest).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });

    /* const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData); */
  });

  test("getHeroeById should return undefined if not exists", () => {
    const id = 10;
    const heroeTest = getHeroeById(id);
    expect(heroeTest).toBe(undefined);
  });

  test("getHeroesByOwner(DC) should return an array with DC heroes", () => {
    const owner = "DC";
    const heroesTest = getHeroesByOwner(owner);
    expect(heroesTest.length).toBe(3);
    expect(heroesTest).toEqual(heroes.filter((h) => h.owner === owner));
    /*  expect(heroes).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]); */
  });

  test("getHeroesByOwner(Marvel) should return an array with Marvel heroes", () => {
    const owner = "Marvel";
    const heroesTest = getHeroesByOwner(owner);
    expect(heroesTest.length).toBe(2);
    expect(heroesTest).toEqual(heroes.filter((h) => h.owner === owner));
    /*     expect(heroes).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]); */
  });
});
