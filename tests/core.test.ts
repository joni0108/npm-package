import { GreetNpm } from "../src/core/core";
import { test, expect } from "vitest";

test("GreetNpm", () => {
  expect(GreetNpm()).toBe("Hello NPM");
});
