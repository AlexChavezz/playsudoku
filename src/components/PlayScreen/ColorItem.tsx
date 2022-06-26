import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";
import { saveThemeONLocalS } from "../../helpers/saveAndUpdateThemes";
import { values } from "../../interfaces/interfaces";

interface ColorItemProps {
    theme: values
    setPalette: React.Dispatch<React.SetStateAction<boolean>>
}

export const ColorItem = React.memo(({ theme, setPalette }:ColorItemProps) => {
    const { themeDispatch } = useContext(GlobalState);
    function changeColor(){
        setPalette(false);
        saveThemeONLocalS(theme);
        themeDispatch({type:"changeTheme", payload: theme});
    }
    return (
        <article
            onClick={changeColor}
            className={`color-palette-item ${theme}`}
        >
        </article>
    );
})