import {Layout} from "../layouts/Layout.tsx";
import {Skills} from "../components/Skills.tsx";
import {Typewriter} from "../components/Typrewriter.tsx";
import {Socials} from "../components/Socials.tsx";
import {Projects} from "../components/Projects.tsx";
import {Certificates} from "../components/Certificates.tsx";
import styled from "styled-components";
import {AnimatedCard} from "../components/AnimatedCard.tsx";

export const MainPage = () => {

    return (
        <Layout title="Weronika Ciężak | Developer Portfolio">
            <AnimatedCard>
                <Container>
                    <Typewriter/>
                    <H1>Hi I'm Weronika 👋</H1>
                    <span>I am a 4th year Computer Science student from Poland.</span>
                    <span>I create full-stack applications.</span>
                    <Socials/>
                </Container>
            </AnimatedCard>

            <AnimatedCard>
                <H2>Tools I worked with</H2>
            </AnimatedCard>
            <Skills/>

            <AnimatedCard>
                <H2>Certificates</H2>
            </AnimatedCard>
            <Certificates/>

            <AnimatedCard>
                <H2>Projects</H2>
            </AnimatedCard>
            <Projects/>
        </Layout>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 7rem;
    padding-bottom: var(--margin-xl);

    @media (max-width: 600px) {
        padding: 7.5rem 0 6rem 0;
    }
`;

const H1 = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: clamp(1.9rem, 3vw, 2.5rem);
    padding-bottom: var(--margin-xs);

    @media (max-width: 600px) {
        font-size: 1.6rem;
    }
`;

const H2 = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 1.3rem;
    padding-bottom: var(--margin-l);
    padding-top: var(--margin-xxxl);
`;
