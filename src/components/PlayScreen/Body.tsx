import { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";

export const Body = () => {
    const { theme } = useContext(GlobalState);
    return (
        <section className={`body-container ${theme}`}>
            <article className="body-title">
                <h1>PLAY SUDOKU</h1>
            </article>
            <article className="body-button-container">
                <button className="body-button">
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
