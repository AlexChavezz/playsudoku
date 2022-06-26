import { useEffect, useReducer } from 'react';
import { GlobalState } from './context/GlobalState';
import { getThemeFromLocalS, saveThemeONLocalS, validateTheme } from './helpers/saveAndUpdateThemes';
import { gobalReducer } from './reducers/globalReducer';
import { MainRouter } from "./router/MainRouter";

const initialState = {
  theme: "themeOne"
}

export default () => {
  const [{ theme }, themeDispatch] = useReducer(gobalReducer, initialState);
  useEffect(() => {
    //Comprobate initial theme
    const themeSaved = getThemeFromLocalS();
    if (!themeSaved) {
      saveThemeONLocalS("themeOne");
      themeDispatch({ type: "changeTheme", payload: "themeOne" })
    } else {
      //validate if theme is valid 
      validateTheme(themeSaved) ? themeDispatch({ type: "changeTheme", payload: themeSaved }) : saveThemeONLocalS("themeOne");
    }
  }, [])
  return (
    <GlobalState.Provider value={{
      theme,
      themeDispatch,
    }}>
      <MainRouter />
    </GlobalState.Provider>
  );
}