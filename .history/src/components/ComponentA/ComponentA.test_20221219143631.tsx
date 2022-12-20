import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentA from ".";

test("renders learn react link", () => {
  render(<ComponentA />);
  const element = screen.getByTestId("hello world");
  expect(element).toBeInTheDocument();
});
