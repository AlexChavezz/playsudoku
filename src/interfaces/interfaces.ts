
type value = "themeOne"| "themeTwo" | "themeThree" | "themeFour";

export type themeAction =
| { type: "changeTheme", payload: value }
| { type: "changeTheme", payload: value }

export interface GlobalState {
  theme: string
  
}

export interface GlobalStateContext {
  theme: string
  themeDispatch: React.Dispatch<themeAction>
}