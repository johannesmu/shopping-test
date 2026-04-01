import '../styles/Header.css'
import { Navigation } from './Navigation'
import navitems from "../config/navigation.json" 
import { useAppTheme } from '../hooks/useAppTheme'


interface HeaderProps {
    title:string
}

export function Header( props:HeaderProps ) {
    const theme = useAppTheme()
    return(
        <header className="main-header" style={{backgroundColor: theme.primaryDark}}>
            <h1 className="title">{ props.title }</h1>
            <Navigation items={navitems.navigation} clsName="main-navigation"/>
        </header>
    )
}