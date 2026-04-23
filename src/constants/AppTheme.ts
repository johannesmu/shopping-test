
const themeColors = {
    primary: "hsla(202, 20%, 34%, 1)",
    primaryDark: "hsla(202, 20%, 24%, 1)",
    primaryDarker: "hsla(202, 20%, 14%, 1)",
    primaryMid: "hsla(202, 20%, 54%, 1)",
    primaryLight: "hsla(202, 20%, 74%, 1)",
    primaryLighter: "hsla(202, 20%, 94%, 1)",
    validLight: "hsl(122 80.6% 20.9%)",
    validDark: "hsl(122 42.2% 47.8%)",
    invalidLight: "hsl(0 80.3% 36.8%)",
    invalidDark: "hsl(0 80.3% 53.9%)"
}
export const AppTheme = {
    "light": {
        background: "#EEEEEE",
        text: "#333333",
        headerbg: themeColors.primaryLight,
        navlink: themeColors.primaryDarker,
        border: themeColors.primaryDark,
        valid: themeColors.validLight,
        invalid: themeColors.invalidLight,
        button: themeColors.primaryLighter,
        buttonInvalidText: themeColors.primaryDarker,
    },
    "dark": {
        background: "#222222",
        text: "#EEEEEE",
        headerbg: themeColors.primaryDark,
        navlink: themeColors.primaryLight,
        border: themeColors.primaryLight,
        valid: themeColors.validDark,
        invalid: themeColors.invalidDark,
        button: themeColors.primaryDarker,
        buttonInvalidText: themeColors.primaryMid,
    }
}

