import styled from "styled-components";
import badge from "../assets/languagecertbadge.png";

export const Certificates= () => {
    const goToLanguageCert = () => {
        window.open(`https://badges.peoplecert.org/Badge/en/D90BA5A3-E0C4-4E1E-8830-C52D7BD99BE0`, '_blank');
    };

    return (
        <>
        <Container>
            <p>LANGUAGECERT Test of English C1 (Listening, Reading)</p>
            <p>Issued on: 11 /03/2026</p>
        </Container>
        <Image src={badge} onClick={() => goToLanguageCert()} />
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled.img`
    display: block;
    background-size: cover;
    background-position: center;
    height: 12rem;
    background-color: var(--primary-color);
    border-radius: 0.5rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    //&:hover {
    //    transform: scale(1.05);
    //    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25)) brightness(70%);
    //    transition: 0.2s;
    //}

    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        display: block;
    }
`;