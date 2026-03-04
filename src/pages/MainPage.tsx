import {Layout} from "../layouts/Layout.tsx";
import styled from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";

export const MainPage = () => {
    return (
        <Layout title="Weronika Ciężak | Portfolio">
            <Container>
                <Font>Lublin, Poland</Font>
                <Title>FULL-STACK DEVELOPER</Title>
            </Container>
            <Container>
                <div>Hi, my name is Weronika and I'm a software developer.</div>
                <div>Currently I am a Computer Science student.</div>
            </Container>
        </Layout>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 1.5rem 0;
`;

const Title = styled.div`
    background: linear-gradient(90deg, ${ColorPalette.secondary.hex} 0%, ${ColorPalette.primary.hex} 20%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Special Gothic Expanded One", sans-serif;
    font-size: 2rem;
`;

const Font = styled.div`
    font-family: "Special Gothic Expanded One", sans-serif;
    font-size: 1rem;
    padding: 0 0 0.5rem 0;
`;
