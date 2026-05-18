import styled from "styled-components";
import badge from "../assets/languagecertbadge.png";

export const Certificates= () => {
    const goToLanguageCert = () => {
        window.open(`https://badges.peoplecert.org/Badge/en/D90BA5A3-E0C4-4E1E-8830-C52D7BD99BE0`, '_blank');
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Container>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Text>LANGUAGECERT Test of English (Listening, Reading)</Text>
                <Text>C1</Text>
                <SmallText>Issued on: 11/03/2026</SmallText>
            </div>

            <Image title="View Certificate" src={badge} onClick={() => goToLanguageCert()} />
        </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.1rem;
    background: var(--primary-color);

    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;

    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
`

const Text = styled.div`
    font-size: 1rem;
`
const SmallText = styled.div`
    font-size: 0.7rem;
    color: var(--secondary-color);
`

const Image = styled.img`
    display: block;
    background-size: cover;
    background-position: center;
    height: 4rem;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
    
    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        display: block;
    }
`;