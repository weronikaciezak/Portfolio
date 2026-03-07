import styled from "styled-components";
import {Switch} from "./Switch.tsx";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const redirectHome = () => navigate("/");
    const redirectResume = () => navigate("/resume");
    const redirectContact = () => navigate("/contact");

    return(
        <Wrapper>
            <Container>
                <SmallTitle onClick={redirectHome}>Home</SmallTitle>
                <SmallTitle onClick={redirectResume}>Resume</SmallTitle>
                <SmallTitle onClick={redirectContact}>Contact</SmallTitle>
            </Container>
            <Container gap={'0.5rem'}>
                <Dot></Dot>
                <Font>Open to work</Font>
                <Switch/>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 1rem;
`;

const Container = styled.div<{gap?: string}>`
    display: flex;
    align-items: center;
    gap: ${props => props.gap || '3.5rem'};
`;

const SmallTitle = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 0.80rem;
    cursor: pointer;
`;

const Font = styled.div`
    font-family: "Young Serif", sans-serif;
    font-size: 0.80rem;
    padding: 0 0.5rem 0 0;
`;

const Dot = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: green;
`;
