import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Test 07-deses-arr", () => {
  test("retornaArreglo should return an Array", () => {
    const [letters, numers] = retornaArreglo();

    //expect(letters).toBe("ABC");
    expect(typeof letters).toBe("string");
    expect(letters).toEqual(expect.any(String));

    //expect(numers).toBe(123);
    expect(typeof numers).toBe("number");
    expect(numers).toEqual(expect.any(Number));
  });
});
