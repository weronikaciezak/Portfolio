import {Layout} from "../layouts/Layout.tsx";
import {SkillsSection} from "../components/SkillsSection.tsx";
import styled from "styled-components";

export const MainPage = () => {

    return (
        <Layout title="Weronika Ciężak | Portfolio">

            {/*<Title>SOFTWARE DEVELOPER</Title>*/}
            <Title>software developer</Title>
            <Name>hi I'm Weronika Ciężak 👋</Name>
            <div>I am a 4th year Computer Science student from Poland.</div>
            <div>I create full-stack applications.</div>

            <Container>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-xl"></i>
                </a>
                <div><i className="fa-brands fa-linkedin fa-xl"></i></div>
                <div><i className="fa-solid fa-envelope fa-xl"></i></div>
            </Container>

            <H2>Tools I worked with</H2>
            <SkillsSection/>

            <H2>Projects</H2>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1.5rem 0 0 0;

    :hover {
        //background-color: #7D7D7D;
    }
`;

// const Link = styled.a`
//     height: 30px;
//
// `;

const Title = styled.div`
    color: var(--secondary-color);
    font-family: "Young Serif", sans-serif;
    //font-weight: bold;
    font-size: 1.5rem;
    padding: 12vh 0 0 0;
`;

const Name = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 2.3rem;
    padding: 0 0 1rem 0;
`;

const H2 = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 1.3rem;
    padding: 9rem 0 1.3rem 0;
`;


