import styled from "styled-components";

export const Projects = () => {
    return(
        <Container>
            <Card/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = styled.div`
    width: 100%;
    height: 10rem;
    background-color: var(--primary-color);
    border-radius: 0.5rem;
`;