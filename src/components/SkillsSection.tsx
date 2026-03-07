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
                <Text>C++</Text>
            </Tile>
            <Tile>
                <SiPython color={ColorPalette.icons.hex} size={50} />
                <Text>Python</Text>
            </Tile>
            <Tile>
                <SiReact color={ColorPalette.icons.hex} size={50} />
                <Text>React</Text>
            </Tile>
            <Tile>
                <SiDocker color={ColorPalette.icons.hex} size={50} />
                <Text>Docker</Text>
            </Tile>
            <Tile>
                <SiJenkins color={ColorPalette.icons.hex} size={50} />
                <Text>Jenkins</Text>
            </Tile>
            <Tile>
                <SiSpringboot color={ColorPalette.icons.hex} size={50} />
                <Text>Spring Boot</Text>
            </Tile>
            <Tile>
                <SiPostgresql color={ColorPalette.icons.hex} size={50} />
                <Text>PostgresSQL</Text>
            </Tile>
            <Tile>
                <SiDjango color={ColorPalette.icons.hex} size={50} />
                <Text>Django</Text>
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
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    background-color: ${ColorPalette.primary.hex};
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    :hover {
        background-color: ${ColorPalette.header.hex};
    }
`;

const Text = styled.div`
    color: ${ColorPalette.icons.hex};
    margin-bottom: 5px;
`;