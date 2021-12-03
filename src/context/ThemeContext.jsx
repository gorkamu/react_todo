import { useState, createContext } from "react";

export const themeMode = {
    LIGHT: 'light',
    DARK: 'dark'
}

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themeMode.LIGHT);

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;