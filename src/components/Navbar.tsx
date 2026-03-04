import styled from "styled-components";

export const Navbar = () => {
    return(
        <Container>
            <Title>Weronika Ciężak</Title>
            <Container>
                <SmallTitle>email</SmallTitle>
                <SmallTitle>linkedin</SmallTitle>
            </Container>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Title = styled.div`
    font-family: "Special Gothic Expanded One", sans-serif;
    font-size: 2.5rem;
    padding: 3rem;
`;

const SmallTitle = styled.div`
    font-family: "Special Gothic Expanded One", sans-serif;
    font-size: 1.5rem;
    padding: 3rem;
`;