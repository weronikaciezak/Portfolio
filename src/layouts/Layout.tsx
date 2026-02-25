import React, {useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const Layout = ({ children, title } : LayoutProps ) => {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            <Footer />
        </div>
    );
};