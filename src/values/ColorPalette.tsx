interface Color {
    hex: string;
}

const ColorPalette: { [key in 'background' | 'footer' | 'header' | 'text' | 'primary' | 'secondary'| 'icons']: Color } = {
    background: { hex: "#EEEEEE" },
    footer: { hex: "#1C1E21" },
    header: { hex: "#7D7D7D" },
    text: { hex: "#000000" },
    primary: { hex: "#a2a2a2" },
    secondary: { hex: "#c2c2c2" },
    icons: { hex: "#FFFFFF" },
};

export default ColorPalette;