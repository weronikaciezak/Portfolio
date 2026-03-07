import { useState } from 'react';
import styled from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";

interface BoxProps {
    $isOn: boolean;
}

export const Switch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return(
        <Box $isOn={isOn} onClick={handleToggle}>
            <Dot $isOn={isOn} />
        </Box>
    )
}

const Box = styled.div<BoxProps>`
    width: 44px;
    min-width: 44px;
    height: 26px;
    border-radius: 40px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    background-color: ${ColorPalette.primary.hex};
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;


const Dot= styled.div<BoxProps>`
    width: 20px;
    height: 20px;
    background: ${ColorPalette.background.hex};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    transform: ${props => props.$isOn ? 'translateX(24px)' : 'translateX(0)'};
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
`;