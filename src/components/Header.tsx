import '../styles/Header.css'
import { Navigation } from './Navigation'
import navigation from "../config/navigation.json" 
import { useAppTheme } from '../hooks/useAppTheme'


interface HeaderProps {
    title:string
}

export function Header( props:HeaderProps ) {
    const theme = useAppTheme()
    return(
        <header className="main-header" style={{backgroundColor: theme.primaryDark}}>
            <h1 className="title">{ props.title }</h1>
            <Navigation items={navigation.navigation} clsName="main-navigation"/>
        </header>
    )
}