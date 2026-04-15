import { type ViewProps } from "../interfaces/ViewProps"
import { AuthForm } from "../components/AuthForm"
import type { SubmitEvent } from "react"

const SignupFormStyle = {
    maxWidth: "480px",
    margin: "auto",
    display: "flex",
    flexFlow: "column wrap"
}

export function Signup( props: ViewProps ) {
    const signUp = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        for ( const key of data.keys() ) {
            console.log(key)
        }
    }
    return(
        <>
            <h1>{ props.title }</h1>
            <AuthForm 
                id="signup" 
                title="Sign up" 
                buttonText="Sign up" 
                style={SignupFormStyle} onSubmit={signUp} 
            />
        </>
    )
}