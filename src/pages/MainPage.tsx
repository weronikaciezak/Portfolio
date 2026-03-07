import {Layout} from "../layouts/Layout.tsx";
import {SkillsSection} from "../components/SkillsSection.tsx";
import styled from "styled-components";
import {useState} from "react";

export const MainPage = () => {

    const goToGithub = () => {
        window.open('https://github.com/weronikaciezak', '_blank');
    };
    const goToLinkedin = () => {
        window.open('https://www.linkedin.com/in/weronika-ci%C4%99%C5%BCak-1554b8359/', '_blank');
    };

    const [isCopied, setIsCopied] = useState(false);
    const copyEmail = () => {
        navigator.clipboard.writeText("weronikaciezak@wp.pl");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 300);
    }

    return (
        <Layout title="Weronika Ciężak | Portfolio">

            <Title>software developer</Title>
            <Name>Hi I'm Weronika Ciężak 👋</Name>
            <div>I am a 4th year Computer Science student from Poland.</div>
            <div>I create full-stack applications.</div>

            <Container>
                <Social title="Open GitHub" onClick={goToGithub}><i className="fa-brands fa-github fa-xl"></i></Social>
                <Social title="Open LinkedIn" onClick={goToLinkedin}><i className="fa-brands fa-linkedin fa-xl"></i></Social>
                <Social title="Copy email" onClick={copyEmail}>
                    <i className={`fa-solid fa-xl ${isCopied ? 'fa-envelope-circle-check' : 'fa-envelope'}`}></i>
                </Social>
            </Container>

            <H2>Tools I worked with</H2>
            <SkillsSection/>

            <H2>Projects</H2>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1.5rem 0 0 0;
`;

const Social = styled.div`
    cursor: pointer;
    color: var(--primary-color);
    :hover {
        color: var(--text-color);
    }
`;

const Title = styled.div`
    color: var(--secondary-color);
    font-family: "Young Serif", sans-serif;
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
    padding: 7rem 0 1.3rem 0;
`;


