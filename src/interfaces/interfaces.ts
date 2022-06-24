
type value = "themeOne"| "themeTwo";

export type themeAction =
| { type: "changeTheme", payload: value }
| { type: "changeTheme", payload: value }

export interface GlobalState {
  theme: string
}