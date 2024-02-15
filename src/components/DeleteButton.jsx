import { useState } from "react";

export const DeleteButton = () => {

    const [text, setText] = useState("X");

    return (
        <button className="delete-button"
            onMouseEnter={() => setText("Eliminar")}
            onMouseLeave={() => setText("X")}
        >
            <div>{text}</div>
        </button>
    )
}
