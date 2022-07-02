export function saveThemeONLocalS(themeToSave: string) {
    window.localStorage.setItem("theme", JSON.stringify(themeToSave));
}
export function getThemeFromLocalS() {
    let themeSaved: any = window.localStorage.getItem("theme");
    themeSaved = JSON.parse(themeSaved);
    return themeSaved;
}
export function validateTheme(theme: string): boolean {
    let flag = false;
    const posibleThemes = ["themeOne", "themeTwo", "themeThree", "themeFour", "themeFive"];
    posibleThemes.forEach((posibleTheme) => {
        if (posibleTheme == theme) flag = true
    })
    return flag;
}
