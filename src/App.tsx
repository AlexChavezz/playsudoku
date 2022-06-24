import { useEffect, useReducer } from 'react';
import { GlobalState } from './context/GlobalState';
import { gobalReducer } from './reducers/globalReducer';
import { MainRouter } from "./router/MainRouter";

const initialState = {
  theme: "themeOne"
}

export default () => {
  useEffect(() => {
    themeDispatch({type:"changeTheme", payload: "themeTwo"})
  }, [])
  const [{ theme }, themeDispatch] = useReducer(gobalReducer, initialState);
  
  return (
    <GlobalState.Provider value={{
      theme,
      themeDispatch,
    }}>
      <MainRouter />
    </GlobalState.Provider>
  );
}


