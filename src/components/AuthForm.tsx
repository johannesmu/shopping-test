import type { ChangeEvent, CSSProperties, SubmitEvent} from "react"
import { useState, useEffect } from 'react'
import { useAppTheme } from "../hooks/useAppTheme"



interface AuthFormProps {
    id: string
    title: string
    buttonText: string
    mode: "signup" | "login"
    style: CSSProperties
    onSubmit: (e: SubmitEvent<HTMLFormElement>) => void
}

interface UserNameFieldProps {
    signupmode: boolean
}

const FormStyle = {
    form: {
        width: "480px",
        display: "flex",
        flexFlow: "column wrap",
        padding: "1em",
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

export function AuthForm(props: AuthFormProps) {
    const[uemail,setUemail] = useState<string|undefined>(undefined)
    const { theme } = useAppTheme()

    const InputStyle = {
        backgroundColor: theme.background,
        color: theme.text,
        borderRadius: "0.4em",
        marginBottom: "1em"
    }

    const UserNameField = (props: UserNameFieldProps) => {
        if (props.signupmode) {
            return (
                <>
                    <label htmlFor="username" style={{...FormStyle.label}}>Username</label>
                    <input
                        style={{ ...FormStyle.input, ...InputStyle }}
                        type="text" 
                        name="username"
                        placeholder="minimum 3 characters"
                        id="username"
                    />
                </>
            )
        }
        else {
            return null
        }
    }

    return (
        <form id={props.id} style={{ ...props.style }} onSubmit={props.onSubmit}>
            <h2>{props.title}</h2>
            <UserNameField signupmode={ (props.mode == "signup") ? true : false } />
            <label htmlFor="email" style={{ ...FormStyle.label }}>Email</label>
            <input 
                style={{ ...FormStyle.input, ...InputStyle }} 
                type="email" 
                name="email" 
                placeholder="you@domain.com" 
                id="email"
                value={uemail}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUemail(e.target.value)}
            />
            <label htmlFor="password" style={{ ...FormStyle.label }}>Password</label>
            <input 
                style={{ ...FormStyle.input, ...InputStyle }} 
                type="password" 
                name="password" 
                placeholder="minimum 8 characters" 
                id="password"
            />
            <button type="submit">{props.buttonText}</button>
        </form>
    )
}