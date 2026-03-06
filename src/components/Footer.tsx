import styled from "styled-components";

export const Footer = () => {
    return(
        <Container>
            <div>Designed and coded by Weronika Ciężak © 2026</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;