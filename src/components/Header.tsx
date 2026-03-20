import '../styles/Header.css'

interface HeaderProps {
    title:string,
}

export function Header( props:HeaderProps ) {
    return(
        <header className="main-header">
            <h1 className="title">{ props.title }</h1>
        </header>
    )
}