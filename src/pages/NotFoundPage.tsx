import styled from "styled-components";
import {useEffect} from "react";
import {Layout} from "../layouts/Layout.tsx";

export const NotFoundPage = () => {
    useEffect(() => {
        document.title = "Page Not Found";
    }, []);

    return(
        <Layout title="Page Not Found">
            <Container>404 Page Not Found</Container>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
`;