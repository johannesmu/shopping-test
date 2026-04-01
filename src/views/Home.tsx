import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"

export function Home(props:ViewProps) {
    document.title = props.title
    return (
        <Page title="Home" clsname="home" />
    )
}