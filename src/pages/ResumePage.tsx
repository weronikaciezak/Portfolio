import {useEffect, useRef, useState} from "react";
import {Layout} from "../layouts/Layout.tsx";
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resumeEN from "../assets/resumeEN.pdf";
import resumePL from "../assets/resumePL.pdf";
import flagPL from "../assets/flag_pl.png";
import flagUK from "../assets/flag_uk.png";
import styled from "styled-components";
import {AnimatedCard} from "../components/AnimatedCard.tsx";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export const ResumePage = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [pageWidth, setPageWidth] = useState(0);

    const [language, setLanguage] = useState<string>("en");
    const resumeFile = language === "en" ? resumeEN : resumePL;
    const downloadName = language === "en" ? "weronika_ciezak_resume.pdf" : "weronika_ciezak_cv.pdf";

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

    const setToPolish = () => {
        setLanguage("pl");
    };

    const setToEnglish = () => {
        setLanguage("en");
    };


    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <Layout title="Weronika Ciężak | Resume">
            <Container>
                <AnimatedCard>
                    <Button onClick={setToPolish}>
                        <FlagImage src={flagPL} alt="Polish flag" />
                    </Button>
                </AnimatedCard>

                <AnimatedCard>
                <Button onClick={setToEnglish}>
                        <FlagImage src={flagUK} alt="UK flag" />
                    </Button>
                </AnimatedCard>

                <AnimatedCard>
                    <Button onClick={downloadResume}>
                        <i className="fa-solid fa-download fa-l"></i>
                        Download
                    </Button>
                </AnimatedCard>
            </Container>

            <AnimatedCard>
                <PdfWrapper ref={wrapperRef}>
                    <PdfDocumentShell>
                        <Document file={resumeFile}>
                            {pageWidth > 0 && (
                                <PdfPageShell>
                                    <Page pageNumber={1} width={pageWidth}/>
                                </PdfPageShell>
                            )}
                        </Document>
                    </PdfDocumentShell>
                </PdfWrapper>
            </AnimatedCard>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    //align-items: flex-end;
    gap: 0.5rem;
    padding: 0 0 1rem 0;

`;

const Button = styled.div`
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    height: 100%;
    color: var(--text-color);
    border-radius: var(--border-radius);
    transition: transform 0.2s ease, 0.2s ease;
    gap: 0.5rem;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 0.2rem 0.5rem;
    width: fit-content;
    background: rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    
    &:hover {
        transform: scale(1.1);
    }
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

const FlagImage = styled.img`
    width: 1.5rem;
    height: 1rem;
    object-fit: cover;
`;

