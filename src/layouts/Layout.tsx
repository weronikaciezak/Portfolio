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
    //width: min(600px, 90%);
    //width: min(40%, 1200px);
    max-width: max(50%, 60rem);
    margin-inline: auto;
    padding-inline: 24px;
    //width: 100%;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const MainContent = styled.main`
    padding: 0 1rem;
    flex-grow: 1;
    flex-direction: column;
`;