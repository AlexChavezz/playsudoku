import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../context/GlobalState";

interface LevelButtonProps {
    level: number
}

export const LevelButton = ({ level }: LevelButtonProps) => {
    const { theme } = useContext(GlobalState);
    const navigation = useNavigate();
    function goToLevel() {
        navigation(`/level${level}`)
    }
    return (
        <button
            className={`level-button ${theme}`}
            onClick={goToLevel}
        >
            {level}
        </button>
    );
}