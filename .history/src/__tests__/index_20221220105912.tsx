import { calculateDurationBetweenTwoRawHours } from "../helper";

describe("Calculate duration between two hours", () => {
  it("Given 2 raw hours, calculate the right duration", (done) => {
    const data = [
      { hour1: 11, hour2: 23, expected: 12 },
      { hour1: 5, hour2: 13, expected: 8 },
      { hour1: 0, hour2: 18, expected: 18 },
      { hour1: 22, hour2: 6, expected: 8 },
      { hour1: 18, hour2: 6, expected: 12 },
      { hour1: 24, hour2: 25, expected: 0 },
      { hour1: -5, hour2: 13, expected: 0 },
    ];

    data.forEach((item) => {
      const duration = calculateDurationBetweenTwoRawHours(
        item.hour1,
        item.hour2
      );
      expect(duration).toBe(item.expected);
    });

    done();
  });
});
