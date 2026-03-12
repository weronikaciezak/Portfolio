import styled from "styled-components";

export const Footer = () => {
    return(
        <Container>Designed and developed by Weronika Ciężak © 2026</Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 15rem 0.5rem 0.5rem 0.5rem;
    font-size: 0.8rem;
`;