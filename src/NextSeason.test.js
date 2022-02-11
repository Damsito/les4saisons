import NextSeason from "./NextSeason";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("NextSeason", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9).valueOf());
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

describe("NextSeason_december", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 11, 9).valueOf());
  });
  it("renders a text `dans 12 jours`", () => {
    render(<NextSeason />);
    expect(screen.getByText("dans 12 jours")).toBeInTheDocument();
  });
  it("renders a text `Hiver`", () => {
    render(<NextSeason />);
    expect(screen.getByText("Hiver")).toBeInTheDocument();
  });
  it("renders a text `88 jours`", () => {
    render(<NextSeason />);
    expect(screen.getByText("88 jours")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
