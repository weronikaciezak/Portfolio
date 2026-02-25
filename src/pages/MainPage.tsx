import styled from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";
import {Layout} from "../layouts/Layout.tsx";

export const MainPage = () => {
    return (
        <Layout title="Portfolio Weronika Ciężak">
            <Columns>
                <Column><Box height={'20%'}/> <Box/></Column>
                <Column><Box height={'20%'}/> <Box/></Column>
                <Column><Box height={'20%'}/> <Box/></Column>
                <Column><Box height={'20%'}/> <Box/></Column>
            </Columns>
        </Layout>
    )
}

const Columns = styled.div`
    display: flex;
    height: 100vh;
`

const Column = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Box = styled.div<{ height?: string }>`
    background-color: ${ColorPalette.header.hex};
    border-radius: 20px;
    width: 100%;
    height: ${props => props.height || '100%'};
`