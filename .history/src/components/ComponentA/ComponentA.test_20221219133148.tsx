import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentA from ".";

test("renders learn react link", () => {
  render(<ComponentA />);
  const element = screen.getByText("hello");
  expect(element).toBeInTheDocument();
});
