import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../context/GlobalState";

export const Body = () => {
    const { theme } = useContext(GlobalState);
    const navigation = useNavigate();
    function goToLevelsMode() {
        navigation("/levels");
    }
    return (
        <section className={`body-container ${theme}`}>
            <article className="body-title">
                <h1>PLAY SUDOKU</h1>
            </article>
            <article className="body-button-container">
                <button
                    className="body-button"
                    onClick={goToLevelsMode}
                >
                    <span className="material-symbols-outlined play">
                        play_arrow
                    </span>
                </button>
                <span>Play as Player392138927
                    <span className="material-symbols-outlined edit">
                        edit
                    </span>
                </span>

            </article>
        </section>
    );
}
