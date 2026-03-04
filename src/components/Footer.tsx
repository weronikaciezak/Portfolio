import styled from "styled-components";

export const Footer = () => {
    return(
        <Container>
            <div>Contact me</div>
            <div>email | LinkedIn | Github</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;