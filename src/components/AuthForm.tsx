import type { ChangeEvent, CSSProperties, SubmitEvent} from "react"
import { useState, useEffect } from 'react'
import { useAppTheme } from "../hooks/useAppTheme"
import { UserNameField } from "./UserNameField"



interface AuthFormProps {
    id: string
    title: string
    buttonText: string
    mode: "signup" | "login"
    style: CSSProperties
    onSubmit: (e: SubmitEvent<HTMLFormElement>) => void
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
    },
   
}

export function AuthForm(props: AuthFormProps) {
    const[uemail,setUemail] = useState<string|undefined>()
    const[upass,setUpass] = useState<string|undefined>()
    const[formvalid,setFormValid] = useState<{email:boolean|undefined, password:boolean|undefined}>({email: undefined, password: undefined })
    const { theme } = useAppTheme()

    // email validation
    useEffect(()=>{
        if( uemail && uemail.length < 6 ) { return }
        else if(uemail) {
            //// FORMAT CHECK
            // find '@'
            const at:number = uemail.indexOf('@')
            // find the first '.' from end
            const dot:number = uemail.lastIndexOf('.')
            // count length
            const len:number = uemail.length
            //// ALPHA NUMERIC CHECK
            const alphanum:boolean = /^[\p{L}\p{N}.@]+$/u.test(uemail)
            if( at > 0 && at < dot && dot < len && alphanum ) {
                //console.log("valid")
                setFormValid({...formvalid, email: true} )
            }
            else {
                //console.log("invalid")
                setFormValid({...formvalid, email: false} )
            }
        }
    },[uemail])

    // password validation
     useEffect(()=>{
        if( !upass ) { return }
        else if( upass ) {
            if( /[^\p{L}\p{N}]/u.test(upass) ) {
                //console.log("valid")
                 setFormValid({...formvalid, password: true} )
            }
            else {
                //console.log("invalid")
                setFormValid({...formvalid, password: false} )
            }
        }
    },[upass])

    useEffect( () => {
        console.log( formvalid )
    },[formvalid])

    const InputStyle = {
        backgroundColor: theme.background,
        color: theme.text,
        borderRadius: "0.4em",
        marginBottom: "1em"
    }

    const ButtonStyle = {
        backgroundColor: theme.button, 
        color: theme.text, 
        padding:"0.5em",
        borderRadius: "0.4em",
        borderStyle: "solid",
        borderColor: theme.border,
        borderWidth: "1px",
        margin: "1em 0px"
    }

    

    return (
        <form id={props.id} style={{ ...props.style }} onSubmit={props.onSubmit}>
            <h2>{props.title}</h2>
            <UserNameField 
                signupmode={ (props.mode == "signup") ? true : false } 
                style={{...InputStyle, ...FormStyle.input}}
            />
            <label htmlFor="email" style={{ ...FormStyle.label }}>Email</label>
            <input 
                style={{ 
                    ...FormStyle.input, 
                    ...InputStyle, 
                    borderColor: (formvalid.email) ? theme.valid : (formvalid.email == false ) ? theme.invalid : "",
                    outlineColor: (formvalid.email) ? theme.valid : (formvalid.email == false ) ? theme.invalid : "",
                }} 
                type="email" 
                name="email" 
                placeholder="you@domain.com" 
                id="email"
                value={uemail}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUemail(e.target.value)}
            />
            <label htmlFor="password" style={{ ...FormStyle.label }}>Password</label>
            <input 
                style={{ 
                    ...FormStyle.input, 
                    ...InputStyle,
                    borderColor: (formvalid.password) ? theme.valid : (formvalid.password == false ) ? theme.invalid : "",
                    outlineColor: (formvalid.password) ? theme.valid : (formvalid.password == false ) ? theme.invalid : "",
                 }} 
                type="password" 
                name="password" 
                placeholder="minimum 8 characters and symbols" 
                id="password"
                value={upass}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUpass(e.target.value)}
            />
            <button type="submit" style={{...ButtonStyle}}>{props.buttonText}</button>
        </form>
    )
}