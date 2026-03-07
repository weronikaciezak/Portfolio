import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {ResumePage} from "./pages/ResumePage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Background} from "./components/Background.tsx";
import {ContactPage} from "./pages/ContactPage.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Background/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/resume" element={<ResumePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}