import { AppTheme } from "../constants/AppTheme";

export function useAppTheme() {
    
    const media = window.matchMedia('(prefers-color-scheme: dark)') 
    if( media.matches ) {
        return AppTheme.dark 
    }
    else {
       return AppTheme.light 
    }
 
}