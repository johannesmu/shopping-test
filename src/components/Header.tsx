import '../styles/Header.css'
import { Navigation } from './Navigation'
import navigation from "../config/navigation.json" 

interface HeaderProps {
    title:string
}

export function Header( props:HeaderProps ) {
    console.log(navigation)
    return(
        <header className="main-header">
            <h1 className="title">{ props.title }</h1>
            <Navigation items={navigation.navigation} clsName="main-navigation"/>
        </header>
    )
}