import { createGlobalStyle } from "styled-components";

export const Background = createGlobalStyle`
    body {
        background-color: var(--bg-color);
        background-image:
                radial-gradient(rgba(255, 255, 255, var(--opacity)) 1px, transparent 1px),
                linear-gradient(to bottom, var(--bg2-color) 0%, var(--bg-color) 20%, var(--bg3-color) 90%, var(--bg2-color) 100%);
        background-size: 20px 20px, 100% 100%;
        background-position: 0 0, 0 0;
        transition: 0.3s ease, 0.3s ease;
        color: var(--text-color);
    }
`;