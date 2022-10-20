import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Test FirstApp", () => {
  const title = "Hola, soy Goku";
  const subtitle = "Soy el mejor";

  test("should match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test("should show title Hola,soy Goku", () => {
    render(<FirstApp title={title} />);
    //screen es el contenido que se renderiza en el DOM
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show title in h1", () => {
    render(<FirstApp title={title} />);
    //screen es el contenido que se renderiza en el DOM
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      title
    );
  });

  test("should show subtitle", () => {
    render(<FirstApp title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
