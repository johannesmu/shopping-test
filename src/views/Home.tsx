import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { Game } from "../components/Game"

export function Home(props:ViewProps) {
    return (
        <Page title={props.title} clsname="home" >
            <Game />
        </Page>
    )
}