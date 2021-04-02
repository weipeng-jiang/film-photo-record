import React from "react";
import { render } from "@testing-library/react-native";
import Test, { add } from "./Test";

test("it works", () => {
  expect(true).toBeTruthy();
});

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("Test to be in document", () => {
  const { getByText } = render(<Test />);

  getByText("Testfd");
});
