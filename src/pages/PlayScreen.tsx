import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";

export const PlayScreen = () => {
    return (
        <main>
            <Header />
            <Body />
            <Footer />
        </main>
    );
}
const Header = () => {
    return (
        <header>
            <span className="material-symbols-outlined palette">
                palette
            </span>
        </header>
    );
}
const Body = () => {
    const { theme } = useContext(GlobalStateContext);
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
const Footer = () => {
    return (
        <footer>
            {/*
                BookMarks
                Settings  exp. lenguague etc.                
            */}
            <section>
                <article>
                    <span className="material-symbols-outlined settings">
                        settings
                    </span>
                    <p>Settings</p>
                </article>
                <article>
                    <span className="material-symbols-outlined bookmarks">
                        star
                    </span>
                    <p>Bookmarks</p>
                </article>
            </section>
        </footer>
    );
}