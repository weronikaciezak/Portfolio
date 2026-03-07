import React, {useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styled from "styled-components";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const Layout = ({ children, title } : LayoutProps ) => {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);

    return (
        <LayoutContainer>
            <Navbar />

            <MainContent>
                {children}
            </MainContent>

            <Footer />
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200vh;
    max-width: clamp(47rem, 47vw, 48rem);
    width: 100%;
    margin: 0 auto;
`;

const MainContent = styled.main`
    padding: 0 1rem;
    flex-grow: 1;
    flex-direction: column;
`;