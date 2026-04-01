import React, {
    createContext,
    useContext,
    useState
} from 'react';

import { AppTheme } from '../constants/AppTheme';
import { type IAppTheme } from '../constants/AppTheme';



const ThemeContext = createContext<IAppTheme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<IAppTheme>(AppTheme.dark);

    const media = window.matchMedia('(prefers-color-scheme: dark)') 
    
    if( media.matches == true ) {
        // set dark theme
        setTheme( AppTheme.dark )
    }
    else {
        // set light theme
        setTheme( AppTheme.light )
    }


    

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): IAppTheme => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};