import { describe, expect, test } from "vitest";
import { formatDate } from "../formatDate";

describe("formatDate", () => {
  test("should format the date correctly for a typical date input", () => {
    expect(formatDate("2024-04-23")).toBe("2024-04-23");
  });

  test("should handle single digit months and days by padding with zeros", () => {
    expect(formatDate("2024-4-5")).toBe("2024-04-05");
  });

  test("should return the correct year", () => {
    const date = new Date("2024-04-23");
    const year = date.getFullYear();
    expect(formatDate("2024-04-23").substring(0, 4)).toBe(String(year));
  });

  test("should return the correct month", () => {
    const date = new Date("2024-04-23");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    expect(formatDate("2024-04-23").substring(5, 7)).toBe(month);
  });

  test("should return the correct day", () => {
    const date = new Date("2024-04-23");
    const day = String(date.getDate()).padStart(2, "0");
    expect(formatDate("2024-04-23").substring(8)).toBe(day);
  });
});
