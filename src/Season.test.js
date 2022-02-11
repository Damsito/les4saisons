import Season from "./Season";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("Season", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9));
  });
  it("renders a text `il y a environ 2 mois`", () => {
    render(<Season />);
    expect(screen.getByText("il y a environ 2 mois")).toBeInTheDocument();
  });
  it("renders a text `Hiver`", () => {
    render(<Season />);
    expect(screen.getByText("Hiver")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
