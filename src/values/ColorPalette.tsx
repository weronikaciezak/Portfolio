interface Color {
    hex: string;
}

const ColorPalette: { [key in 'background' | 'footer' | 'header' | 'text' | 'primary' | 'secondary']: Color } = {
    background: { hex: "#EEEEEE" },
    footer: { hex: "#1C1E21" },
    header: { hex: "#7D7D7D" },
    text: { hex: "#000000" },
    primary: { hex: "#E5E0DE" },
    secondary: { hex: "#FFFFFF" },
};

export default ColorPalette;