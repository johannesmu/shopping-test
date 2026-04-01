import { useAppTheme } from "../hooks/useAppTheme"

interface IFooterProps {
    title: string
}

export function Footer( props:IFooterProps ) {
    const theme = useAppTheme()

    return (
    <footer 
        className="main-footer" 
        style={{
            backgroundColor: theme.primaryDark,
            color: theme.text
        }}
    >
        <p>{ props.title }</p>
    </footer>
    )
}