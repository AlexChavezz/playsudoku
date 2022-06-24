import { useContext, useState } from "react";
import { Header, Body, Footer } from "../components/PlayScreen";
import { ColorItem } from "../components/PlayScreen/ColorItem";
import { GlobalState } from "../context/GlobalState";



export const PlayScreen = () => {
    const { theme } = useContext(GlobalState);
    // const Themes = ["themeOne", "themeTwo", "themeFour"];
    const [Themes, setThemes] = useState(["themeOne", "themeTwo", "themeFour"]);
    return (
        <main className={theme}>
            <Header />
            <Body />
            <Footer />
            <section
                style={{
                    position: "absolute",
                    width: "100px",
                    height: "500px",
                    backgroundColor: "red",
                    top: 0,
                    right: 20,
                    bottom: 0,
                    margin: "auto",
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                {
                    Themes.map((theme: string) => {
                        return <ColorItem theme={theme} key={theme} />
                    })
                }
            </section>
        </main>
    );
}