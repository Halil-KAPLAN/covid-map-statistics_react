import { describe, test, expect } from "vitest";
import { formatNumber } from "../formatNumber";

describe("formatNumber", () => {
  test("should format a number correctly with given decimal places", () => {
    expect(formatNumber(1234.567, 2)).toBe("1.234,567");
  });

  test("should format a number correctly with no decimal places", () => {
    expect(formatNumber(1234, 0)).toBe("1.234");
  });

  test("should handle zero as a valid number input", () => {
    expect(formatNumber(0, 2)).toBe("0,00");
  });

  test("should return an empty string for null and undefined input", () => {
    expect(formatNumber(null, 2)).toBe("");
    expect(formatNumber(undefined, 2)).toBe("");
  });
});
