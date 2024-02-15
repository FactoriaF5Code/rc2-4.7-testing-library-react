import { useState } from "react";
import "./DeleteButton.css";

export const Panel = () => {
    const [text, setText] = useState("");
    return (
        <>
            <h1>Haz click en el pulsador</h1>
            <button onClick={() => setText("Hola!")}>Púlsame</button>
            <p>{text}</p>
        </>
    );
};
