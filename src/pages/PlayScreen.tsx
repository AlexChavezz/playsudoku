import { useContext, useEffect, useRef, useState } from "react";
import { Header, Body, Footer, ColorItem } from "../components/PlayScreen";
import { GlobalState } from "../context/GlobalState";
import { animationIn, animationOut } from "../helpers/animations";
import { values } from "../interfaces/interfaces";


const Themes: values[] = ["themeOne", "themeTwo", "themeThree", "themeFour", "themeFive"];

export const PlayScreen = () => {
    const { theme } = useContext(GlobalState);
    const [palette, setPalette] = useState<boolean>(false);
    const colorRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (palette) {
            animationIn(colorRef);
        } else {
            animationOut(colorRef);
        }
    }, [palette])

    function showColors(): void {
        if (!palette) {
            animationIn(colorRef);
        } else {
            animationOut(colorRef);
        }
        setPalette(!palette);
    }

    return (
        <main className={theme}>
            <Header showColors={showColors} />
            <Body />
            <Footer />
            <section
                ref={colorRef}
                className="color-palette-container"
            >
                {
                    Themes.map((theme) => {
                        return <ColorItem theme={theme} key={theme} setPalette={setPalette} />
                    })
                }
            </section>
        </main>
    );
}
