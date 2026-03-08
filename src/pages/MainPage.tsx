import {Layout} from "../layouts/Layout.tsx";
import {SkillsSection} from "../components/SkillsSection.tsx";
import styled from "styled-components";
import {Typewriter} from "../components/Typrewriter.tsx";
import {Socials} from "../components/Socials.tsx";

export const MainPage = () => {
    return (
        <Layout title="Weronika Ciężak | Portfolio">
            <div style={{ display: "flex", justifyContent: "flex-start", paddingTop: "9rem" }}>
                <Typewriter/>
            </div>
            <H1>hi I'm Weronika 👋</H1>
            <div>I am a 4th year Computer Science student from Poland.</div>
            <div>I create full-stack applications.</div>
            <Socials/>

            <H2>Tools I worked with</H2>
            <SkillsSection/>

            <H2>Projects</H2>
        </Layout>
    )
}

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


