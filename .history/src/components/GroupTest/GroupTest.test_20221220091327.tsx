import { render, screen } from "@testing-library/react";
import GroupTest from ".";

describe("Group Test", () => {
  test("Single test", () => {
    render(<GroupTest />);
    const element = screen.getByTestId("test2");
    expect(element).toBeInTheDocument();
  });
});
