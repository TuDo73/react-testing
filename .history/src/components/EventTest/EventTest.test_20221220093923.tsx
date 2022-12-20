import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import EventTest from ".";

describe("Event test", () => {
  test("render count correct after click button", async () => {
    user.setup();
    render(<EventTest />);

    const button = screen.getByTestId("event1");
    const text = screen.getByTestId("text1");
    await user.click(button);

    expect(text).toHaveTextContent("1");
  });
});
