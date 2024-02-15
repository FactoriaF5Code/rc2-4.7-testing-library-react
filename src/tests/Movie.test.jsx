import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Movie } from "../components/Movie";


test("Cada película muestra la información", () => {
    const info = {
        title: "Wizard of Oz",
        year: "1939"
    };

    render(<Movie {...info} />);

    expect(screen.getByText(/Wizard of Oz/)).toBeInTheDocument();
    expect(screen.getByText(/1939/)).toBeInTheDocument();
})