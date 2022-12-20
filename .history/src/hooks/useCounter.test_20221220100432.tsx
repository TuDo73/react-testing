import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("render correct initial value", () => {
    const { result } = renderHook(useCounter);
    expect(result.current).toBe(0);
  });
});
