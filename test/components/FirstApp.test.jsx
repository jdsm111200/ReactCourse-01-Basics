import { render } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Test FirstApp", () => {
  /*   test("should show <FirstApp /> correctly", () => {
    const title = "Hola, soy Goku";
    const { container } = render(<FirstApp title={title} />);
    //genera un snapshot al ejecutar por primera vez la prueba y luego lo ocupa para comparar el componente
    expect(container).toMatchSnapshot();
  }); */

  test("should show title", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    // verifica si el title existe en el DOM
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").textContent).toContain(title);

    //no hay que hacer pruebas tan estrictasu
    //verifica si hay un h1 en el dom que contenga title, ojo que el querySelector solo devuelve el primer elemento que encuentra
    /* const h1 = container.querySelector("h1");
    expect(h1.textContent).toContain(title); */
  });

  test("should show subtitle", () => {
    const title = "Hola, soy Goku";
    const subtitle = "Soy el mejor";
    const { getByText, getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );
    //getByText solo espera encontrar un elemento, si encuentra mas de uno falla
    // expect(getByText(subtitle)).toBeTruthy();

    //getAllByText espera encontrar mas de un elemento, si no encuentra ninguno falla
    expect(getAllByText(subtitle).length).toBe(2);
  });
  /*  test("should show <FirstApp /> correctly", () => {
    const wrapper = shallow(<FirstApp title="Hola, soy Goku" />);
    expect(wrapper).toMatchSnapshot();
  }); */

  /*   test("should show <FirstApp /> correctly with subtitle", () => {
    const wrapper = shallow(
      <FirstApp title="Hola, soy Goku" subTitle="Soy un subtítulo" />
    );
    expect(wrapper).toMatchSnapshot();
  }); */
});
