import styled from "styled-components";
import {
    SiCplusplus, SiCss, SiDjango,
    SiDocker, SiFirebase, SiJavascript,
    SiJenkins, SiKotlin,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpringboot
} from "@icons-pack/react-simple-icons";
import {AnimatedCard} from "./AnimatedCard.tsx";

const skills = [
    {name: "C++", icon: SiCplusplus},
    {name: "Python", icon: SiPython},
    {name: "Kotlin", icon: SiKotlin},
    {name: "JavaScript", icon: SiJavascript },
    {name: "React", icon: SiReact},
    {name: "CSS", icon: SiCss},
    {name: "Docker", icon: SiDocker},
    {name: "Jenkins", icon: SiJenkins},
    {name: "Spring Boot", icon: SiSpringboot},
    {name: "Django", icon: SiDjango},
    {name: "PostgreSQL", icon: SiPostgresql},
    {name: "Firebase", icon: SiFirebase},
]

export const Skills = () => {
    return(
        <Container role="list">
            {skills.map(({ icon: Icon, name }) => (
                <AnimatedCard key={name}>
                    <Tile role="listitem" title={`${name}`}>
                        <Icon color="var(--text-color)" size="3rem" aria-label={`${name}`} />
                        <Text>{name}</Text>
                    </Tile>
                </AnimatedCard>
            ))}
        </Container>
    )
}

const Tile = styled.div`
    height: 6rem;
    width: auto;
    min-height: 6rem;
    
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    gap: 0.3rem;
    
    transition: transform 0.3s ease, 0.3s ease;
    &:hover {
        background-color: var(--primary-color);
        transform: scale(1.1);
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
    color: var(--text-color);
    background: rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.09);
`;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    justify-content: center;
    gap: 0.7rem;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    }
`;

const Text = styled.div`
    color: var(--text-color);
    margin-bottom: -0.3rem;
    text-align: center;
    font-size: 0.8rem;
    
    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
`;