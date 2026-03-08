import {useState} from "react";
import styled from "styled-components";

export const Socials = () => {
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
        setTimeout(() => setIsCopied(false), 500);
    }

    return(
        <Container>
            <Icon title="Open GitHub" onClick={goToGithub}><i className="fa-brands fa-github fa-xl"></i></Icon>
            <Icon title="Open LinkedIn" onClick={goToLinkedin}><i className="fa-brands fa-linkedin fa-xl"></i></Icon>
            <Icon title="Copy email" onClick={copyEmail}>
                <i className={`fa-solid fa-xl ${isCopied ? 'fa-envelope-circle-check' : 'fa-envelope'}`}></i>
            </Icon>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1.5rem 0 0 0;
`;

const Icon = styled.div`
    cursor: pointer;
    color: var(--primary-color);
    :hover {
        color: var(--text-color);
    }
`;