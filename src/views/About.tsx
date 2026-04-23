import { Page } from "../components/Page"
import type { ViewProps } from "../interfaces/ViewProps"

export function About( props:ViewProps) {
    document.title = props.title
    return (
        <Page title="About" clsname="about">
            <p>About page</p>
        </Page>
    )
}