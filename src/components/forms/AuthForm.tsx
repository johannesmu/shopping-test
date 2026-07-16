import { useState } from 'react'
import { InputField } from "./InputField"

interface AuthFormProps {
    mode: "login" | "signup",
    style: CSSStyleRule,
    username: boolean
}

const InputStyle = {
    color: "red"
}

export function AuthForm( props:AuthFormProps) {
    const [email,setEmail] = useState<undefined | string>()
    return (
        <form>
            <InputField 
            type="email" 
            placeholder="user@example.com" 
            name="uemail" label="Email" 
            value={email}
            id="uemail"
            changeHandler={ (v:string) => setEmail(v)}
            style={ InputStyle }
            />
        </form>
    )
}