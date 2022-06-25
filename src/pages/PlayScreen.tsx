import { createRef, useContext, useEffect, useRef, useState } from "react";
import { Header, Body, Footer } from "../components/PlayScreen";
import { ColorItem } from "../components/PlayScreen/ColorItem";
import { GlobalState } from "../context/GlobalState";


const Themes = ["themeOne", "themeTwo", "themeThree", "themeFour"];

export const PlayScreen = () => {
    const { theme } = useContext(GlobalState);
    const [palette, setPalette] = useState<boolean>(false);
    const ref = createRef();
    const colorRef = useRef<HTMLElement>(null);
    useEffect(()=>{
        if(palette){
            colorRef.current?.animate([
                { transform: "translateX(50px)" },
                { visibility:"visible" },
                { opcacity: 0 },
                { transform: "translateX(0px)" },
                { opcacity: 1 },
            ], {
                duration: 200
            })
            setTimeout(()=>{
                colorRef.current.style.visibility = "visible";
            }, 150)
        }else{
            colorRef.current?.animate([
                { transform: "translateX(0px)" },
                { opcacity: 1 },
                { transform: "translateX(50px)" },
                { opcacity: 0 },
            ], {
                duration: 200
            })
            setTimeout(()=>{
                colorRef.current.style.visibility = "hidden";
            }, 150)
        }
    },[[palette]])
    function showColors() {
        if(!palette){
            colorRef.current?.animate([
                { transform: "translateX(50px)" },
                { visibility:"visible" },
                { opcacity: 0 },
                { transform: "translateX(0px)" },
                { opcacity: 1 },
            ], {
                duration: 200
            })
            setTimeout(()=>{
                colorRef.current.style.visibility = "visible";
            }, 150)
        }else{
            colorRef.current?.animate([
                { transform: "translateX(0px)" },
                { opcacity: 1 },
                { transform: "translateX(50px)" },
                { opcacity: 0 },
            ], {
                duration: 200
            })
            setTimeout(()=>{
                colorRef.current.style.visibility = "hidden";
            }, 150)
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
                style={{
                    // backgroundColor: "lightblue",
                    position: "absolute",
                    width: "100px",
                    height: "500px",
                    top: 0,
                    right: 20,
                    bottom: 0,
                    margin: "auto",
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    visibility: "hidden"
                }}
            >
                {
                    Themes.map((theme: string) => {
                        return <ColorItem theme={theme} key={theme} reference={ref} setPalette={setPalette}/>
                    })
                }
            </section>
        </main>
    );
}