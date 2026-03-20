interface NavigationProps {
    items:Array<{ name:string, route:string, id:number}>
}
export function Navigation( props:NavigationProps ) {
    const Items = props.items.map( (item) => {
        return( <a href={ item.route } key={item.id} >{ item.name }</a>)
    })
    return(
        <nav className="main-navigation">
            {Items}
        </nav>
    )
}