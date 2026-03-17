import { useTheme } from './ThemeContext';
import styled from "styled-components";

interface BoxProps {
    $isOn: boolean;
}

export const Switch = () => {
    const { isDark, toggleTheme } = useTheme();

    return(
        <Box $isOn={isDark} onClick={toggleTheme}>
            <Dot $isOn={isDark}>
                <i className={isDark ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
            </Dot>
        </Box>
    )
}

const Box = styled.div<BoxProps>`
    width: 2.75rem;
    min-width: 2.75rem;
    height: 1.625rem;
    border-radius: 2.5rem;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;


const Dot= styled.div<BoxProps>`
    width: 1.25rem;
    height: 1.25rem;
    background: var(--bg-color);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    transform: ${props => props.$isOn ? 'translateX(1.5rem)' : 'translateX(0)'};
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);

    i {
        font-size: 0.8rem;
        color: var(--primary-color);
        transition: color 0.3s ease, transform 1s cubic-bezier(0.4, 0.0, 0.2, 1);
        transform: ${props => props.$isOn ? 'rotate(320deg)' : 'rotate(0deg)'};
    }
`;