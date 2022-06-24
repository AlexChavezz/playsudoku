import {useEffect, useReducer} from 'react';
import { GlobalStateContext } from './context/GlobalState';
import { gobalReducer } from './reducers/globalReducer';
import { MainRouter } from "./router/MainRouter";

const initialState = {
  theme: "themeOne"
}

export default () => {
  useEffect(() => {
    dispatch({type:"changeTheme", payload: "themeTwo"})
  }, [])
  const [{ theme }, dispatch] = useReducer(gobalReducer, initialState);
  console.log(theme)
  return (
    <GlobalStateContext.Provider value={{
      theme,
    }}>
      <MainRouter />
    </GlobalStateContext.Provider>
  );
}


