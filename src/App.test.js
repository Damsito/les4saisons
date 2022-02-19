import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import {App} from "./App";
describe("App", () => {
    it("renders the content", () => {
        render(<App />);
        expect(screen.getByTestId("content")).toBeInTheDocument();
    });
    it("renders the actions", () => {
        render(<App />);
        expect(screen.getByTestId("actions")).toBeInTheDocument();
    });
});