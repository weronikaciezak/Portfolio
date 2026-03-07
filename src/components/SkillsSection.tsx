import styled from "styled-components";
import {
    SiCplusplus, SiCss, SiDjango,
    SiDocker, SiFigma, SiFirebase,
    SiJenkins, SiKotlin,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpringboot
} from "@icons-pack/react-simple-icons";


export const SkillsSection = () => {
    return(
        <Container>
            <Tile>
                <SiCplusplus color='var(--icon-color)' size={50} />
                <Text>C++</Text>
            </Tile>
            <Tile>
                <SiPython color='var(--icon-color)' size={50} />
                <Text>Python</Text>
            </Tile>
            <Tile>
                <SiKotlin color='var(--icon-color)' size={50} />
                <Text>Kotlin</Text>
            </Tile>
            <Tile>
                <SiReact color='var(--icon-color)' size={50} />
                <Text>React</Text>
            </Tile>
            <Tile>
                <SiDocker color='var(--icon-color)' size={50} />
                <Text>Docker</Text>
            </Tile>
            <Tile>
                <SiJenkins color='var(--icon-color)' size={50} />
                <Text>Jenkins</Text>
            </Tile>
            <Tile>
                <SiSpringboot color='var(--icon-color)' size={50} />
                <Text>Spring Boot</Text>
            </Tile>
            <Tile>
                <SiDjango color='var(--icon-color)' size={50} />
                <Text>Django</Text>
            </Tile>
            <Tile>
                <SiPostgresql color='var(--icon-color)' size={50} />
                <Text>PostgresSQL</Text>
            </Tile>
            <Tile>
                <SiFirebase color='var(--icon-color)' size={50} />
                <Text>Firebase</Text>
            </Tile>
            <Tile>
                <SiCss color='var(--icon-color)' size={50} />
                <Text>CSS</Text>
            </Tile>
            <Tile>
                <SiFigma color='var(--icon-color)' size={50} />
                <Text>Figma</Text>
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
    border-radius: 8px;
    gap: 5px;
    background-color: var(--primary-color);
    //box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    
    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
        background-color: var(--accent-color);
        transform: scale(1.1);
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Text = styled.div`
    color: var(--icon-color);
    margin-bottom: 5px;
`;