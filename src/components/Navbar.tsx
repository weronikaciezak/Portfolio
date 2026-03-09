import styled from "styled-components";
import {Switch} from "./Switch.tsx";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const redirectHome = () => navigate("/");
    const redirectResume = () => navigate("/resume");
    // const redirectContact = () => navigate("/contact");

    return(
        <Wrapper>
            <Container1>
                <SmallTitle onClick={redirectHome}>Home</SmallTitle>
                <SmallTitle onClick={redirectResume}>Resume</SmallTitle>
                {/*<SmallTitle onClick={redirectContact}>Contact</SmallTitle>*/}
            </Container1>
            <Container2>
                <Dot></Dot>
                <Font>Open to work</Font>
                <Switch/>
            </Container2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;

    @media (max-width: 600px) {
        padding: 1rem 0;
        align-items: flex-start;
    }
`;

const Container1 = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    //gap: 3.5rem;
    gap: clamp(0.5rem, 3vw, 3.5rem);
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
`;

const Container2 = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
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