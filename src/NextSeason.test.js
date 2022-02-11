import NextSeason from "./NextSeason";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("NextSeason", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9));
  });
  it("renders a text `dans environ 1 mois`", () => {
    render(<NextSeason />);
    expect(screen.getByText("dans environ 1 mois")).toBeInTheDocument();
  });
  it("renders a text `Printemps`", () => {
    render(<NextSeason />);
    expect(screen.getByText("Printemps")).toBeInTheDocument();
  });
  it("renders a text `92 jours`", () => {
    render(<NextSeason />);
    expect(screen.getByText("92 jours")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
