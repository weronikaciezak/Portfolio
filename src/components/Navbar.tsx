import styled from "styled-components";

export const Navbar = () => {
    return(
        <Wrapper>
            <Container>
                <SmallTitle>Home</SmallTitle>
                <SmallTitle>Resume</SmallTitle>
                <SmallTitle>Contact</SmallTitle>
            </Container>
            <Container gap={'0.5rem'}>
                <Dot></Dot>
                <Font>Open to work</Font>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 1rem;
`;

const Container = styled.div<{gap?: string}>`
    display: flex;
    align-items: center;
    gap: ${props => props.gap || '3.5rem'};
`;

const SmallTitle = styled.div`
    font-family: "Unbounded", sans-serif;
    font-size: 0.80rem;
`;

const Font = styled.div`
    font-family: "Young Serif", sans-serif;
    font-size: 0.80rem;
`;

const Dot = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: green;
`;
