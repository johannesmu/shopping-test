import type { CSSProperties } from "react"

interface UserNameFieldProps {
    signupmode: boolean
    style: CSSProperties
}

export function UserNameField (props: UserNameFieldProps){
        if (props.signupmode) {
            return (
                <>
                    <label htmlFor="username" style={{marginBottom:"0.5em"}}>Username</label>
                    <input
                        style={props.style}
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