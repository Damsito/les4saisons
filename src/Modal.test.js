import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./Modal";

describe(Modal.name, () => {
    it("renders a button with `Afficher la saison suivante` label", () => {
        render(<Modal />);
        expect(
            screen.getByRole("button", { name: "Afficher la saison suivante" })
        ).toBeInTheDocument();
    });
});