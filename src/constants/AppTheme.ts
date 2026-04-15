
const themeColors = {
    primary: "hsla(202, 20%, 34%, 1)",
    primaryDark: "hsla(202, 20%, 24%, 1)",
    primaryDarker: "hsla(202, 20%, 14%, 1)",
    primaryMid: "hsla(202, 20%, 54%, 1)",
    primaryLight: "hsla(202, 20%, 74%, 1)",
    primaryLighter: "hsla(202, 20%, 94%, 1)",
}
export const AppTheme = {
    "light": {
        background: "#EEEEEE",
        text: "#333333",
        headerbg: themeColors.primaryLight,
        navlink: themeColors.primaryDarker,
        border: themeColors.primaryDark
    },
    "dark": {
        background: "#222222",
        text: "#EEEEEE",
        headerbg: themeColors.primaryDark,
        navlink: themeColors.primaryLight,
        border: themeColors.primaryLight,
    }
}

