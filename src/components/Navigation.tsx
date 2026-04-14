import { useAppTheme } from "../hooks/useAppTheme"
interface NavigationProps {
    items: Array<{ name: string, route: string, id: number }>
    clsName: string
}

export function Navigation(props: NavigationProps) {
    const theme = useAppTheme()
    const Items = props.items.map((item) => {
        return (
        <a href={item.route} key={item.id} style={{
            color:theme.navlink, 
            textTransform:'capitalize'}} >
            {item.name}
        </a>)
    })
    return (
        <nav className={props.clsName}>
            {Items}
        </nav>
    )
}