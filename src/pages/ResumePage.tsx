import {Layout} from "../layouts/Layout.tsx";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resumePDF from "../assets/Resume.pdf";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export const ResumePage = () => {

    return(
        <Layout title="Resume | Weronika Ciężak">
            <Container>
                <LangButton>EN / PL</LangButton>
                <DownloadButton href={resumePDF} download="weronika_ciezak_resume.pdf">
                    Download
                </DownloadButton>
            </Container>

            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
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