import { AppTheme } from "../constants/AppTheme";

export function useAppTheme() {
    
    const media = window.matchMedia('(prefers-color-scheme: dark)') 
    if( media.matches ) {
        console.log('dark')
        return AppTheme.dark 
    }
    else {
        console.log('light')
       return AppTheme.light 
    }
 
}