import { type ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
// import type { SubmitEvent } from "react"



export function Login(props: ViewProps) {
    
    return (
        <Page title={props.title} clsname="login">
            <h1>Login</h1>
        </Page>
    )
}