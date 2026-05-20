import styled from "styled-components";
import simpletodo from '../assets/simpletodo.png';
import bookstore from '../assets/bookstore.png';
import React from "react";

import {
    SiSpringboot,
    SiPostgresql,
    SiDocker,
    SiJenkins,
    SiExpress,
    SiKotlin,
    SiDjango,
    SiReact,
    SiFirebase,
    SiHtml5,
    SiJavascript, SiHibernate, SiThymeleaf
} from '@icons-pack/react-simple-icons';

const iconMap: { [key: string]: React.ComponentType } = {
    "JavaScript": SiJavascript,
    "Spring Boot": SiSpringboot,
    "PostgreSQL": SiPostgresql,
    "Docker": SiDocker,
    "Jenkins": SiJenkins,
    "Express": SiExpress,
    "Kotlin": SiKotlin,
    "Django": SiDjango,
    "React": SiReact,
    "Firebase Authentication": SiFirebase,
    "Firestore": SiFirebase,
    "HTML5 Canvas": SiHtml5,
    "Hibernate": SiHibernate,
    "Thymeleaf": SiThymeleaf,
};

const colorMap: { [key: string]: string } = {
    "Spring Boot": "#6DB33F",
    "PostgreSQL": "#50a2e4",
    "Docker": "#2496ED",
    "Jenkins": "#ea4330",
    "Express": "#000000",
    "Kotlin": "#7043f4",
    "Django": "#092E20",
    "React": "#61DAFB",
    "Firebase Authentication": "#FFCA28",
    "Firestore": "#FFCA28",
    "HTML5 Canvas": "#E34C26",
    "JavaScript": "#F7DF1E",
    "Hibernate": "#8c8459",
    "Thymeleaf": "#127a16",
};

const projects = [
    {
        id: 1,
        title: "Bookstore",
        description: "A full-stack web application for bookstore management built with Spring Boot, Thymeleaf, Hibernate, and PostgreSQL.",
        badges: ["☕️ Java", "Spring Boot", "Hibernate", "Thymeleaf", "PostgreSQL"],
        repoName: "Bookstore",
        image: bookstore,
        action: "Open Repo"
    },
    {
        id: 2,
        title: "Simple To-Do",
        description: "A Node.js and PostgreSQL application containerized with Docker, using automated CI/CD deployment pipeline built with Jenkins to deploy code upon commit.",
        badges: ["JavaScript", "PostgreSQL", "Docker", "Jenkins"],
        repoName: "SimpleTodo",
        image: simpletodo,
        action: "Open Repo"
    },
    {
        id: 3,
        title: "GymBros",
        description: "A native Android social fitness app built with Kotlin Jetpack Compose, and Google Firebase, featuring user matching, custom workouts, and interactive challenges.",
        badges: ["Kotlin", "Firestore", "Firebase Authentication"],
        repoName: "GymBros",
        image: simpletodo,
        action: "Open Repo"
    },
    {
        id: 4,
        title: "Statify",
        description: "Developed as a team project, Statify is a Django-based web application that fetches listening data from Spotify and Last.fm to generate music collages. I was responsible for creating the frontend interface.",
        badges: ["Django", "React"],
        repoName: "Statify",
        image: simpletodo,
        action: "Private Repo"
    },
    {
        id: 5,
        title: "Web Shooter",
        description: "2D game with 3 game modes where players score points by defeating enemies. It implements mechanics like collisions, raycasting, weapon cooldowns, and health regeneration. Also a Bazooka.",
        badges: ["HTML5 Canvas", "JavaScript"],
        repoName: "web-shooter",
        image: simpletodo,
        action: "Play"
    }
];

export const Projects = () => {

    return (
        <Container>
            {projects.map((project) => (
                <Project key={project.id}>
                    <ImageWrapper>
                        <Image src={project.image}/>
                    </ImageWrapper>

                    <Content>
                        <Container2>
                            <Title>{project.title}</Title>
                            <div>
                                <OpenButton
                                    as="a"
                                    href={`https://github.com/weronikaciezak/${project.repoName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.action}
                                </OpenButton>
                            </div>
                        </Container2>
                        <Description>{project.description}</Description>

                        <BadgeContainer>
                            {project.badges.map((badge, index) => {
                                const IconComponent = iconMap[badge];
                                const iconColor = colorMap[badge];
                                return (
                                    <Badge key={index}>
                                        {IconComponent &&
                                            <IconWrapper $color={iconColor}><IconComponent/></IconWrapper>}
                                        <span>{badge}</span>
                                    </Badge>
                                );
                            })}
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
    gap: 1.5rem;
    flex-wrap: wrap;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
`;

const Project = styled.div`
    display: flex;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 0.7rem;

    text-decoration: none;
    color: inherit;
    
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        //transform: scale(1.05);
    }

    //background: linear-gradient(130deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.12) 40%, rgba(255, 255, 255, 0.03) 100%);
    background: linear-gradient(130deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%);
    //background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.09); 

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Content = styled.div`
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`;

const ImageWrapper = styled.div`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex: 1 1 100%;
    }
`;

const Image = styled.img`
    display: block;
    background-size: cover;
    background-position: center;
    height: 12rem;
    border-radius: 0.3rem;

    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const Title = styled.div`
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    font-family: "Unbounded", sans-serif;
    font-size: 1.2rem;
`;

const Description = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: var(--description-color);
    line-height: 1.5;
`;

const BadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-top: auto;
`;

const Badge = styled.div`
    width: fit-content;
    padding: 0.2rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    //border: 1px solid rgba(255, 255, 255, 0.1);
    //filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
    border-radius: 0.4rem;
    font-size: 0.7rem;
    font-family: "Young Serif", serif;
    display: flex;
    align-items: center;
    gap: 0.35rem;
`;

const IconWrapper = styled.span<{ $color?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px;
        height: 16px;
        fill: ${props => props.$color || 'currentColor'};
    }
`;

const OpenButton = styled.button`
    width: fit-content;
    padding: 0.2rem 0.5rem;
    background-color: var(--primary-color);
    border-radius: 0.5rem;
    font-size: 0.7rem;
    cursor: pointer;
    transition: transform 0.3s ease, 0.3s ease;
    color: var(--text-color);
    text-decoration: none;

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transform: scale(2);
    }
`;



