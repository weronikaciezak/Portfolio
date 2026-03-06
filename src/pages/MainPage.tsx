import {Layout} from "../layouts/Layout.tsx";
import {SkillsSection} from "../components/SkillsSection.tsx";
import styled from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";

export const MainPage = () => {

    return (
        <Layout title="Weronika Ciężak | Portfolio">

            <Title>SOFTWARE DEVELOPER</Title>
            <Name>hi I'm Weronika Ciężak 🖐</Name>
            <div>I am a computer science student from Poland 🇵🇱</div>
            <div>I create full-stack applications. </div>

            <H2>Tools I worked with</H2>
            <SkillsSection />

        </Layout>
    )
}

const Title = styled.div`
    color: ${ColorPalette.header.hex};
    font-family: "Unbounded", sans-serif;
    font-size: 1.2rem;
    padding: 5.5rem 0 0.2rem 0;
`;

const Name = styled.div`
    color: ${ColorPalette.text.hex};
    font-family: "Unbounded", sans-serif;
    font-size: 2.3rem;
    padding: 0 0 0.8rem 0;
`;

const H2 = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 1.3rem;
    padding: 6rem 0 1.3rem 0;
`;


