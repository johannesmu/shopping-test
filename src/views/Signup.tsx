// import type { SubmitEventHandler } from "react"
import { AuthForm } from "../components/AuthForm"
import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"


export function Signup( props:ViewProps) {

    const signUp= () => {
    }

    return(
        <Page title={props.title} clsname="signup">
            <AuthForm 
            id="signup"
            title="Sign up" 
            labels={["email","password"]}
            placeholders={["you@example.com","minimum 8 characters"]}
            submitHandler={signUp}
            submitText="Submit"
            />
        </Page>
    )
}