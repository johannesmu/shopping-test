// import type { SubmitEventHandler } from "react"
import type { SubmitEventHandler } from "react"
import { AuthForm } from "../components/AuthForm"

export function Signup() {
    const signUp= () => {
    }

    return(
        <>
            <AuthForm 
            id="signup"
            title="Sign up" 
            labels={["email","password"]}
            placeholders={["you@example.com","minimum 8 characters"]}
            submitHandler={signUp}
            submitText="Submit"
            />
        </>
    )
}