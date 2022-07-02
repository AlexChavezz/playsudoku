import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LevelScreen } from "../pages/LevelScreen";
import { LevelsScreen } from "../pages/LevelsScreen";
import { PlayScreen } from "../pages/PlayScreen";



export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/play" element={<PlayScreen />} />
                <Route path="/levels" element={<LevelsScreen />} />
                <Route path="/level:level" element={<LevelScreen />}/>
            </Routes>
        </BrowserRouter>
    );
}