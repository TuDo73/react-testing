import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentA from ".";

test("renders learn react link", () => {
  render(<ComponentA />);
  const linkElement = screen.getByText("hello");
  expect(linkElement).toBeInTheDocument();
});
