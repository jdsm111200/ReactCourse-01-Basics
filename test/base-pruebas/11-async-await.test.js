import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Test 11-async-await", () => {
  
  test("getImagen should return an url", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
    expect(url.includes("https://")).toBe(true);
  });

  test("getImagen should return an error", async () => {
    const error = await getImagen();
    expect(error).toEqual(expect.any(String));
  });
});
