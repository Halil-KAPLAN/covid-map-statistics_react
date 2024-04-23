import { describe, test, expect } from "vitest";
import { mapStyle } from "../mapStyle";

describe("mapStyle", () => {
  test("should have default styles", () => {
    expect(mapStyle.default).toEqual({
      fill: "#D6D6DA",
      outline: "none",
      transition: "fill 0.3s",
    });
  });

  test("should have hover styles", () => {
    expect(mapStyle.hover).toEqual({
      cursor: "pointer",
      fill: "#F53",
      outline: "none",
      stroke: "#FFF",
      strokeWidth: 0.75,
    });
  });

  test("should have pressed styles", () => {
    expect(mapStyle.pressed).toEqual({
      cursor: "pointer",
      fill: "#E42",
      outline: "none",
    });
  });
});
