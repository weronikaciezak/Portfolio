import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

export const Socials = () => {
    const toastTimeoutRef = useRef<number | null>(null);
    const goToGithub = () => {
        window.open('https://github.com/weronikaciezak', '_blank');
    };
    const goToLinkedin = () => {
        window.open('https://www.linkedin.com/in/weronika-ci%C4%99%C5%BCak-1554b8359/', '_blank');
    };

    const [isCopied, setIsCopied] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = (message: string) => {
        setToastMessage(message);

        if (toastTimeoutRef.current) {
            window.clearTimeout(toastTimeoutRef.current);
        }

        toastTimeoutRef.current = window.setTimeout(() => {
            setToastMessage(null);
        }, 2000);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("weronikaciezak@wp.pl");
            setIsCopied(true);
            showToast("Email copied");

            window.setTimeout(() => setIsCopied(false), 500);
        } catch {
            showToast("Could not copy email");
        }
    };

    useEffect(() => {
        return () => {
            if (toastTimeoutRef.current) {
                window.clearTimeout(toastTimeoutRef.current);
            }
        };
    }, []);

    return(
        <>
            <Container>
                <Icon title="Open GitHub" onClick={goToGithub}>
                    <i className="fa-brands fa-github fa-xl"></i>
                </Icon>

                <Icon title="Open LinkedIn" onClick={goToLinkedin}>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </Icon>

                <Icon title="Copy email" onClick={copyEmail}>
                    <i className={`fa-solid fa-xl ${isCopied ? 'fa-envelope-circle-check' : 'fa-envelope'}`}></i>
                </Icon>
            </Container>

            {toastMessage && <Toast>{toastMessage}</Toast>}
        </>
    )
}

const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1.5rem 0 0 0;
`;

const Icon = styled.div`
    cursor: pointer;
    color: var(--primary-color);
    :hover {
        color: var(--text-color);
    }
`;

const Toast = styled.div`
    position: fixed;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: var(--text-color);
    padding: 0.75rem 1.25rem;

    z-index: 1000;
    font-size: 0.95rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); 
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
`;

