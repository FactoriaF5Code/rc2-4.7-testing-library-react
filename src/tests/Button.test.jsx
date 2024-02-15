import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { DeleteButton } from "../components/DeleteButton";
import userEvent from "@testing-library/user-event";

test("El botón muestra una cruz", () => {

    render(<DeleteButton />);

    expect(screen.getByText(/X/)).toBeInTheDocument();

});


test("Si paso por encima del botón se tiene que mostrar la palabra eliminar", () => {

    render(<DeleteButton />);

    
    fireEvent.mouseEnter(screen.getByText(/X/));

    expect(screen.getByText(/Eliminar/)).toBeInTheDocument();

});