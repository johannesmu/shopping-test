import { type ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { AuthForm } from "../components/AuthForm"
import type { SubmitEventHandler, SubmitEvent } from "react"


export function Signup( props:ViewProps ) {
    const signUp = (e:SubmitEvent)=> {}
    return(
        <Page title="Sign up" clsname="signup">
            <AuthForm 
            id="signup" 
            title="Sign up for an account" 
            labels={["Email","Password"]}
            placeholders={["you@example.com","minimum 8 characters"]}
            submitHandler={signUp}
            />
        </Page>
    )
}