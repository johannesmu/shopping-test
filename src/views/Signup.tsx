import { type ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { AuthForm } from "../components/AuthForm"
import type { SubmitEvent } from "react"

const SignupFormStyle = {
    maxWidth: "480px",
    margin: "auto",
    display: "flex",
    flexFlow: "column wrap"
}

export function Signup(props: ViewProps) {
    const signUp = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        for (const key of data.keys()) {
            console.log(key)
        }
    }
    return (
        <Page title={props.title} clsname="signup">
            <AuthForm
                id="signup"
                title="Sign up"
                buttonText="Sign up"
                style={SignupFormStyle} onSubmit={signUp}
                mode="signup"
            />
        </Page>
    )
}