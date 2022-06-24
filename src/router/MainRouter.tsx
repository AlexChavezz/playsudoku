import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PlayScreen } from "../pages/PlayScreen";



export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/play" element={<PlayScreen />} />
            </Routes>
        </BrowserRouter>
    );
}