import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./Modal";

describe("Modal", () => {
    it("renders a button with `Afficher la saison suivante` label", () => {
        render(<Modal />);
        expect(
            screen.getByRole("button", { name: "Afficher la saison suivante" })
        ).toBeInTheDocument();
    });
});