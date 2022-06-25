
export type values = "themeOne"| "themeTwo" | "themeThree" | "themeFour" | "themeFive";

export type themeAction =
| { type: "changeTheme", payload: values }
| { type: "changeTheme", payload: values }

export interface GlobalState {
  theme: string
  
}

export interface GlobalStateContext {
  theme: string
  themeDispatch: React.Dispatch<themeAction>
}