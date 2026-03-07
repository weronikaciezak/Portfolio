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
            <Container2 gap={'0.5rem'}>
                <Dot></Dot>
                <Font>Open to work</Font>
                <Switch/>
            </Container2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 1rem;
    
    @media (max-width: 700px) {
        align-items: flex-start;
        padding: 2rem 1rem;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
    }
`;
const Container2 = styled.div<{gap?: string}>`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${props => props.gap || '3.5rem'};
    padding: 0 1.5rem 0 0;
    @media (max-width: 700px) {
        gap: 5px;
    }
`;

const SmallTitle = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 0.90rem;
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
    filter: drop-shadow(0px 0px 2px #81ff81);
`;
