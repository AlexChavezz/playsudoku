import { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";

interface ColorItemProps {
    theme: string
    setPalette:any
}

export const ColorItem = ({ theme, setPalette }:ColorItemProps) => {
    const { themeDispatch } = useContext(GlobalState);
    function changeColor(){
        themeDispatch({type:"changeTheme", payload: theme});
        setPalette(false);
    }
    return (
        <article
            onClick={changeColor}
            style={{
                borderRadius: 50,
                height: "35px",
                width: "35px",
                // boxShadow:"2px 2px 2px #ccc ins"
                border: "2px solid #ccc"
            }}
            className={theme}
        >

        </article>
    );
}