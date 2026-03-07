import { createGlobalStyle } from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";

export const Background = createGlobalStyle`
    body {
        background-color: ${ColorPalette.background.hex};
        background-image:
                radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, ${ColorPalette.background.hex} 0%, ${ColorPalette.primary.hex} 100%);
        background-size: 20px 20px, 100% 100%;
        background-position: 0 0, 0 0;
        color: ${ColorPalette.text.hex || '#FFFFFF'}; // Text color
    }
`;