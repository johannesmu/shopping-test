import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { Game } from "../components/Game"

export function Home(props:ViewProps) {
    document.title = props.title
    return (
        <Page title="Home" clsname="home">
            <Game />
        </Page>
    )
}