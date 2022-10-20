import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../../src/components/CounterApp";

describe("Test CounterApp", () => {
  const intialValue = 0;
  test("should match with snapshot", () => {
    const { container } = render(<CounterApp value={0} />);
    expect(container).toMatchSnapshot();
  });

  test("should show value 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText("100")).toBeTruthy();
  });

  test("should increment value +1 when clicked button +1", () => {
    render(<CounterApp value={intialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    expect(
      screen.getByRole("heading", { level: 2, name: intialValue + 1 })
    ).toBeTruthy();
  });

  test("should decrement value -1 when clicked button -1", () => {
    render(<CounterApp value={intialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "-1" }));
    expect(
      screen.getByRole("heading", { level: 2, name: intialValue - 1 })
    ).toBeTruthy();
  });

  test("should reset value when clicked button reset", () => {
    render(<CounterApp value={intialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(
      screen.getByRole("heading", { level: 2, name: intialValue })
    ).toBeTruthy();
  });
});
