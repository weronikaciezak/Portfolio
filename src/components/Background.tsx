import { createGlobalStyle } from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";

export const Background = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${ColorPalette.background.hex || '#121212'};
        color: ${ColorPalette.text.hex || '#FFFFFF'};
    }
`;