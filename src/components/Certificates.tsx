import styled from "styled-components";
import badge from "../assets/languagecertbadge.png";

export const Certificates= () => {

    return (
        <Container
            as="a"
            href={`https://badges.peoplecert.org/Badge/en/D90BA5A3-E0C4-4E1E-8830-C52D7BD99BE0`}
            target="_blank"
            rel="noopener noreferrer"
        >

            <Image src={badge}/>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <Text>LANGUAGECERT Test of English (Listening, Reading)</Text>
                <Text>C1</Text>
                <SmallText>Issued on: 11/03/2026</SmallText>
            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    flex-direction: row;
    padding: 0.9rem;
    gap: 1rem;
    text-decoration: none;
    display: inline-flex;
    color: inherit;

    border-radius: 0.5rem;
    cursor: pointer;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    
    &:hover {
        transform: scale(1.05);
    }

`

const Text = styled.div`
    font-size: 1rem;
`

const SmallText = styled.div`
    font-size: 0.7rem;
`

const Image = styled.img`
    display: block;
    background-size: cover;
    background-position: center;
    height: 4rem;
`;