import Season from "./Season";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("on january", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 0, 5));
  });
  it("returns spring season", () => {
    render(<Season dateProps={new Date()} />);
    expect(screen.getByText("Hiver")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
describe("on avril", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 5));
  });
  it("returns spring season", () => {
    render(<Season dateProps={new Date()} />);
    expect(screen.getByText("Printemps")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
describe("on july", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 6, 1));
  });
  it("returns spring season", () => {
    render(<Season dateProps={new Date()} />);
    expect(screen.getByText("Ete")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});

describe("on october", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 9, 1));
  });
  it("returns spring season", () => {
    render(<Season dateProps={new Date()} />);
    expect(screen.getByText("Automne")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});


