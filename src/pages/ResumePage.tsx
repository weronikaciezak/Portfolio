import {Layout} from "../layouts/Layout.tsx";
import {useState} from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resumePDF from "../assets/Resume.pdf";

// Ustaw worker z lokalnego folderu public
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export const ResumePage = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    return(
        <Layout title="Resume | Weronika Ciężak">
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                {loading && <p>Ładowanie PDF...</p>}
                {error && (
                    <div style={{color: 'red', padding: '1rem', backgroundColor: '#ffe6e6', borderRadius: '4px'}}>
                        <p>⚠️ Błąd: {error}</p>
                        <p><a href={resumePDF} target="_blank">Pobierz PDF bezpośrednio</a></p>
                    </div>
                )}
                {!error && (
                    <Document
                        file={resumePDF}
                        onLoadSuccess={({ numPages }) => {
                            console.log('PDF załadowany, strony:', numPages);
                            setNumPages(numPages);
                            setError(null);
                            setLoading(false);
                        }}
                        onLoadError={(error) => {
                            console.error('PDF Error:', error);
                            setError(`Nie można załadować PDF: ${error.message}`);
                            setLoading(false);
                        }}
                        loading={<p>Przetwarzanie pliku...</p>}
                    >
                        <Page pageNumber={1} />
                    </Document>
                )}
                {numPages && <p>Strona 1 z {numPages}</p>}
            </div>
        </Layout>
    )
}