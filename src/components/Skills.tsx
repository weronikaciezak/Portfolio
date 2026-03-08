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

const skills = [
    {name: "C++", icon: SiCplusplus},
    {name: "Python", icon: SiPython},
    {name: "Kotlin", icon: SiKotlin},
    {name: "React", icon: SiReact},
    {name: "Docker", icon: SiDocker},
    {name: "Jenkins", icon: SiJenkins},
    {name: "Spring Boot", icon: SiSpringboot},
    {name: "Django", icon: SiDjango},
    {name: "PostgreSQL", icon: SiPostgresql},
    {name: "Firebase", icon: SiFirebase},
    {name: "CSS", icon: SiCss},
    {name: "Figma", icon: SiFigma}
]

export const Skills = () => {
    return(
        <Container>
            {skills.map(({ icon: Icon, name }) => (
                <Tile>
                    <Icon color="var(--icon-color)" size="3rem" />
                    <Text>{name}</Text>
                </Tile>
            ))}
        </Container>
    )
}

const Tile = styled.div`
    height: 6.25rem;
    width: auto;
    min-height: 6.25rem;
    min-width: 6.25rem;
    
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0.5rem;
    gap: 0.3rem;
    background-color: var(--primary-color);
    
    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
        background-color: var(--accent-color);
        transform: scale(1.1);
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
`;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
    justify-content: center;
    gap: 1.25rem;
`;

const Text = styled.div`
    color: var(--icon-color);
    margin-bottom: 0.3rem;
`;