import ColorPalette from "../values/ColorPalette.tsx";
import styled from "styled-components";
import {
    SiCplusplus, SiDjango,
    SiDocker,
    SiJenkins,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpringboot
} from "@icons-pack/react-simple-icons";


export const SkillsSection = () => {
    return(
        <Container>
            <Tile>
                <SiCplusplus color={ColorPalette.icons.hex} size={50} />
                <div>C++</div>
            </Tile>
            <Tile>
                <SiPython color={ColorPalette.icons.hex} size={50} />
                <div>Python</div>
            </Tile>
            <Tile>
                <SiReact color={ColorPalette.icons.hex} size={50} />
                <div>React</div>
            </Tile>
            <Tile>
                <SiDocker color={ColorPalette.icons.hex} size={50} />
                <div>Docker</div>
            </Tile>
            <Tile>
                <SiJenkins color={ColorPalette.icons.hex} size={50} />
                <div>Jenkins</div>
            </Tile>
            <Tile>
                <SiSpringboot color={ColorPalette.icons.hex} size={50} />
                <div>Spring Boot</div>
            </Tile>
            <Tile>
                <SiPostgresql color={ColorPalette.icons.hex} size={50} />
                <div>PostgresSQL</div>
            </Tile>
            <Tile>
                <SiDjango color={ColorPalette.icons.hex} size={50} />
                <div>Django</div>
            </Tile>
        </Container>
    )
}

const Tile = styled.div`
    width: 100px;
    height: 100px;
    padding: 3px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    background-color: #C2C2C2;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

