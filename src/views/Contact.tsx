import { Page } from "../components/Page"
import { type ViewProps } from "../interfaces/ViewProps"


export function Contact( props:ViewProps ) {
    return (
        <Page title={ props.title} clsname="contact">
            <h1>Contact</h1>
        </Page>
    )
}