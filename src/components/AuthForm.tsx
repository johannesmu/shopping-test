import type { CSSProperties, FormEvent, SubmitEvent } from "react"
import { useAppTheme } from "../hooks/useAppTheme"

interface FormProps {
    id: string
    title: string
    buttonText: string
    style: CSSProperties
    onSubmit: (e: SubmitEvent<HTMLFormElement>) => void
}

const FormStyle = {
    form: {
        width: "480px",
        display: "flex",
        flexFlow: "column wrap"
    },
    label: {
        marginBottom: "0.5em"
    },
    input: {
        padding: "0.5em",
        borderStyle: "solid",
        borderWidth: "0.1em",
    }
}

export function AuthForm(props: FormProps) {
    const theme = useAppTheme()
    
    const InputStyle = {
        backgroundColor: theme.background,
        color: theme.text,
        borderRadius: "0.4em",
        marginBottom: "1em"
    }

    return (
        <form id={props.id} style={{ ...props.style }} onSubmit={props.onSubmit}>
            <h2>{props.title}</h2>
            <label style={{...FormStyle.label}}>Email</label>
            <input style={{...FormStyle.input, ...InputStyle}} type="email" name="email" placeholder="you@domain.com" />
            <label style={{...FormStyle.label}}>Password</label>
            <input style={{...FormStyle.input, ...InputStyle}} type="password" name="password" placeholder="minimum 8 characters" />
            <button type="submit">{props.buttonText}</button>
        </form>
    )
}