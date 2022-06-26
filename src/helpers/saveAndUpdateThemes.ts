export function saveThemeONLocalS(themeToSave: string) {
    window.localStorage.setItem("theme", JSON.stringify(themeToSave));
}
export function getThemeFromLocalS() {
    let themeSaved: any = window.localStorage.getItem("theme");
    themeSaved = JSON.parse(themeSaved);
    return themeSaved;
}
export function validateTheme(theme: string): boolean {
    let bool = false;
    if (theme === "themeOne" || theme === "themeTwo" || theme === "themeThree" || theme === "themeFour" || theme === "themeFive") bool = true;
    return bool;
}
