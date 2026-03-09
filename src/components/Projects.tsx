import styled from "styled-components";
import simpletodo from '../assets/simpletodo.png';

const projects = [
    {
        id: 1,
        title: "Bookstore",
        description: "A full-stack web application for bookstore management built with Spring Boot, Thymeleaf, Hibernate, and PostgreSQL.",
        badges: ["Java", "Spring Boot", "Hibernate", "Thymeleaf", "PostgreSQL"],
        repoName: "Bookstore",
        image: simpletodo
    },
    {
        id: 2,
        title: "Simple To-Do",
        description: "A Node.js and PostgreSQL application containerized with Docker, using automated CI/CD deployment pipeline built with Jenkins to deploy code upon commit.",
        badges: ["Node.js", "Docker", "Jenkins", "PostgreSQL", "Express" ],
        repoName: "SimpleTodo",
        image: simpletodo
    },
    {
        id: 3,
        title: "GymBros",
        description: "A native Android social fitness app built with Kotlin, Jetpack Compose, and Google Firebase, featuring user matching, custom workouts, and interactive challenges.",
        badges: ["Google Firebase", "Jetpack Compose", "Firebase Authentication"],
        repoName: "GymBros",
        image: simpletodo,
    }
];

export const Projects = () => {

    const goToGithub = (repoName: string) => {
        window.open(`https://github.com/weronikaciezak/${repoName}`, '_blank');
    };

    return(
        <Container>
            {projects.map((project) => (
                <Project key={project.id}>
                    <Image src={project.image} onClick={() => goToGithub(project.repoName)} />

                    <Content>
                        <Title>{project.title}</Title>
                        <div style={{ display: "flex" }}>{project.description}</div>

                        <BadgeContainer>
                            {project.badges.map((badge, index) => (
                                <Badge key={index}>{badge}</Badge>
                            ))}
                        </BadgeContainer>
                    </Content>
                </Project>
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex-wrap: wrap;
`;

const Project = styled.div`
    display: flex;
    gap: 1rem;
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`;

const Image = styled.img`
    display: block;
    background-size: cover;
    background-position: center;
    height: 12rem;
    background-color: var(--primary-color);
    border-radius: 0.5rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    //&:hover {
    //    transform: scale(1.05);
    //    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25)) brightness(70%);
    //    transition: 0.2s;
    //}
    
    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const Title = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 1.3rem;
`;

const BadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Badge = styled.div`
    width: fit-content;
    padding: 0.2rem 0.5rem;
    background-color: color-mix(in srgb, var(--primary-color) 70%, transparent);
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-family: "Young Serif", serif;
`;

