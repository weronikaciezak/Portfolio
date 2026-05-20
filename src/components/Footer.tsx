import styled from "styled-components";

export const Footer = () => {
    return (
        <>
            <Container></Container>
            <Text>© 2026 Weronika Ciężak</Text>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    padding: 10rem 0.5rem 0.5rem 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Text = styled.p`
    padding: 0.1rem 0 1rem 0;
    font-size: 0.7rem;
`;