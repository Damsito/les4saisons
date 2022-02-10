import Season from "./Season";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe(Season.name, () => {
    describe(Season.name, () => {
        beforeAll(() => {
            jest.useFakeTimers("modern");
            jest.setSystemTime(new Date(2022, 1, 9));
        });
        it("renders a text `il y a environ 2 mois`", () => {
            let screen = render(<Season />);
            expect(screen.getByText("il y a environ 2 mois")).toBeInTheDocument();
        });
        afterAll(() => {
            jest.useRealTimers();
        });
    });
});