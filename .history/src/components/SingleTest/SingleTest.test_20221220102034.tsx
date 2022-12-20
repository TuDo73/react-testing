import { render, screen } from "@testing-library/react";
import SingleTest from ".";

test("Single Test", () => {
  render(<SingleTest />);
  const element = screen.getByTestId("test1");
  expect(element).toBeInTheDocument();
});
