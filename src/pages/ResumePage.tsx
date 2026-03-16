import {useEffect, useRef, useState} from "react";
import {Layout} from "../layouts/Layout.tsx";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resumeEN from "../assets/resumeEN.pdf";
import resumePL from "../assets/resumePL.pdf";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export const ResumePage = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [language, setLanguage] = useState<string>("en");
    const [pageWidth, setPageWidth] = useState(0);
    const resumeFile = language === "en" ? resumeEN : resumePL;
    const downloadName = language === "en" ? "weronika_ciezak_resume_en.pdf" : "weronika_ciezak_resume_pl.pdf";

    useEffect(() => {
        if (!wrapperRef.current) {
            return;
        }

        const observer = new ResizeObserver(([entry]) => {
            setPageWidth(Math.floor(entry.contentRect.width));
        });

        observer.observe(wrapperRef.current);

        return () => observer.disconnect();
    }, []);

    const handleLanguageToggle = () => {
        setLanguage((currentLanguage) => currentLanguage === "en" ? "pl" : "en");
    };
    
    return(
        <Layout title="Resume | Weronika Ciężak">
            <Container>
                <LangButton onClick={handleLanguageToggle}>{language === "en" ? "PL" : "EN"}</LangButton>
                <DownloadButton href={resumeFile} download={downloadName}>
                    Download file
                </DownloadButton>
            </Container>

            <PdfWrapper ref={wrapperRef}>
                <PdfDocumentShell>
                    <Document file={resumeFile}>
                        {pageWidth > 0 && (
                            <PdfPageShell>
                                <Page pageNumber={1} width={pageWidth} />
                            </PdfPageShell>
                        )}
                    </Document>
                </PdfDocumentShell>
            </PdfWrapper>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-bottom: 1rem;
`;

const LangButton = styled.button`
    background: var(--primary-color);
`;

const DownloadButton = styled.a`
    background: var(--primary-color);
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: inline-block;
`;

const PdfWrapper = styled.div`
    width: 100%;
`;

const PdfDocumentShell = styled.div`
    display: flex;
    justify-content: center;
`;

const PdfPageShell = styled.div`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
