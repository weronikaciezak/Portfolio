import { useState, useEffect } from "react";
import styled from "styled-components";

export const Typewriter = ()=> {
    const text = "software developer";

    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);

    const finished = index >= text.length;

    useEffect(() => {
        if (index >= text.length) return;

        const timeout = setTimeout(() => {
            setDisplayed((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
        }, 80);

        return () => clearTimeout(timeout);
    }, [index, text]);

    return (
        <H1>
            {displayed}
            {!finished && <span>|</span>}
        </H1>
    );
}

const H1 = styled.div`
    font-size: 1.5rem;
    font-family: "Young Serif", sans-serif;
    color: var(--secondary-color);
`;
