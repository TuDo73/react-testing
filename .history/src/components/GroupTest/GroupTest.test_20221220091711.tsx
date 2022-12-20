import { render, screen } from "@testing-library/react";
import GroupTest from ".";

describe("Group Test", () => {
  test("Single test 1", () => {
    render(<GroupTest />);
    const element = screen.getByTestId("test1");
    expect(element).toBeInTheDocument();
  });

  test.only("Single test 2", () => {
    render(<GroupTest />);
    const element = screen.getByTestId("test2");
    expect(element).toBeInTheDocument();
  });
});
