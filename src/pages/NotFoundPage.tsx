import styled from "styled-components";
import {useEffect} from "react";

export const NotFoundPage = () => {
    useEffect(() => {
        document.title = "Page Not Found";
    }, []);

    return(
        <Container title="Page Not Found">
            <div>404 Page Not Found</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
`;