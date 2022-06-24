import { GlobalState, themeAction } from "../interfaces/interfaces";

export const gobalReducer = (state:GlobalState, action:themeAction):GlobalState => {
    switch(action?.type){
      case "changeTheme":
        return {
          theme: action.payload,
        }
      default:
        return state;
    }
  }
  