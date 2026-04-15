import { type ViewProps } from "../interfaces/ViewProps"
import { AuthForm } from "../components/AuthForm"

const SignupFormStyle = {
    maxWidth: "480px",
    margin: "auto",
    display: "flex",
    flexFlow: "column wrap"
}
export function Signup( props:ViewProps ) {

    return(
        <>
            <h1>{ props.title }</h1>
            <AuthForm id="signup" title="Sign up" buttonText="Sign up" style={SignupFormStyle} />
        </>
    )
}