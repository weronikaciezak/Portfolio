interface Color {
    hex: string;
}

const ColorPalette: { [key in 'background' | 'footer' | 'header' | 'text' | 'primary' | 'secondary']: Color } = {
    background: { hex: "#03030E" },
    footer: { hex: "#1C1E21" },
    header: { hex: "#242526" },
    text: { hex: "#DFDEF9" },
    primary: { hex: "#978597" },
    secondary: { hex: "#FFFFFF" },
};

export default ColorPalette;