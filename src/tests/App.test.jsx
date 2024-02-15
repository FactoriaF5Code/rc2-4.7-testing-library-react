import { expect, test } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";

test("Se muestra la lista de películas", () => {
    render(<App />);

    expect(screen.getByText(/Inception/)).toBeInTheDocument()
    expect(screen.getByText(/The Matrix/)).toBeInTheDocument()
    expect(screen.getByText(/Interstellar/)).toBeInTheDocument()
    expect(screen.getByText(/The Lord of the Rings: The Fellowship of the Ring/)).toBeInTheDocument()
    expect(screen.getByText(/Forrest Gump/)).toBeInTheDocument()    
})