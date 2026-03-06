import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {Resume} from "./pages/Resume.tsx";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Background} from "./components/Background.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Background/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}