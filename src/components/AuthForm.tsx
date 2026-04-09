import type { SubmitEventHandler } from "react"

interface AuthFormProps {
    id:string
    title: string
    labels: string[]
    placeholders: string[]
    submitHandler():SubmitEventHandler
    submitText:string
}
export function AuthForm(props: AuthFormProps) {
    return (
        <form id={ props.id } onSubmit={props.submitHandler()}>
            <h2>{ props.title }</h2>
            <label>{ props.labels[0] }</label>
            <input type="email" name="email" placeholder="you@domain.com" />
            <label>{ props.labels[1] }</label>
            <input type="password" name="email" placeholder="minimum 8 characters" />
            <button type="submit">{ props.submitText }</button>
        </form>
    )
}