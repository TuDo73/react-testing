import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventTest from ".";

describe("Event test", () => {
  test("render count correct after click button", async () => {
    userEvent.setup();
    render(<EventTest />);

    const button = screen.getByTestId("event1");
    const text = screen.getByTestId("text1");
    await userEvent.click(button);

    expect(text).toHaveTextContent("1");
  });
});
