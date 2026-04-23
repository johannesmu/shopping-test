import { createContext, useState, useEffect, type ReactNode } from "react"
import { AppTheme } from "../constants/AppTheme"

type ThemeColors = typeof AppTheme["light"]

interface AppThemeContextType {
    theme: ThemeColors
    colorScheme: "light" | "dark"
}

export const AppThemeContext = createContext<AppThemeContextType | null>(null)

export function AppThemeProvider({ children }: { children: ReactNode }) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
    const [colorScheme, setColorScheme] = useState<"light" | "dark">(
        prefersDark.matches ? "dark" : "light"
    )

    useEffect(() => {
        const handler = (e: MediaQueryListEvent) => {
            setColorScheme(e.matches ? "dark" : "light")
        }
        prefersDark.addEventListener("change", handler)
        return () => prefersDark.removeEventListener("change", handler)
    }, [])

    return (
        <AppThemeContext.Provider value={{ theme: AppTheme[colorScheme], colorScheme }}>
            {children}
        </AppThemeContext.Provider>
    )
}