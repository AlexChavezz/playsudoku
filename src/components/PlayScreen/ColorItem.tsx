import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";
import { values } from "../../interfaces/interfaces";

interface ColorItemProps {
    theme: values
    setPalette: React.Dispatch<React.SetStateAction<boolean>>
}

export const ColorItem = React.memo(({ theme, setPalette }:ColorItemProps) => {
    const { themeDispatch } = useContext(GlobalState);
    function changeColor(){
        themeDispatch({type:"changeTheme", payload: theme});
        setPalette(false);
        window.localStorage.setItem("theme", "hola");
    }
    return (
        <article
            onClick={changeColor}
            className={`color-palette-item ${theme}`}
        >
        </article>
    );
})