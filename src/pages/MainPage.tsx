import styled from "styled-components";
import {Layout} from "../layouts/Layout.tsx";
import {Skills} from "../components/Skills.tsx";
import {Typewriter} from "../components/Typrewriter.tsx";
import {Socials} from "../components/Socials.tsx";
import {Projects} from "../components/Projects.tsx";

export const MainPage = () => {
    return (
        <Layout title="Weronika Ciężak | Portfolio">
            <Container>
                <Typewriter/>
                <H1>hi I'm Weronika 👋</H1>
                <div>I am a 4th year Computer Science student from Poland.</div>
                <div>I create full-stack applications.</div>
                <Socials/>
            </Container>

            <H2>Tools I worked with</H2>
            <Skills/>

            <H2>Projects</H2>
            <Projects/>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 9rem 0 0 0;
    
    @media (max-width: 600px) {
        padding: 5rem 0 4rem 0;
    }
`;

const H1 = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: clamp(1.9rem, 3vw, 2.5rem);
    padding: 0 0 1rem 0;
`;

const H2 = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 1.3rem;
    padding: 7rem 0 1.3rem 0;
`;


