// import type { SubmitEventHandler } from "react"
import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react"
import { useAppTheme } from "../hooks/useAppTheme"

export function Signup(props: ViewProps) {
    const [username, setUserName] = useState<undefined | string>(undefined)
    const [usernameValid, setUsernameValid] = useState<undefined | boolean>(undefined)
    const [userEmail, setuserEmail] = useState<undefined | string>(undefined)
    const [emailValid, setemailValid] = useState<undefined | boolean>(undefined)

    const theme = useAppTheme()
    const FormStyles = {
        backgroundColor: theme.theme.background,
        color: theme.theme.text,
        borderColor: theme.theme.border
    }
    // validate username
    useEffect(() => {
        if (username == undefined) {
            return
        }
        else if (username.length < 4) {
            setTimeout(() => setUsernameValid(false), 500)
        }
        else {
            setTimeout(() => setUsernameValid(true), 500)
        }
    }, [username])

    // validate email
    useEffect(() => {
        if (!userEmail) { return }
        else if (userEmail.indexOf('@') > 0 && userEmail.length > 5 ) {
            setTimeout(() => setemailValid(true), 500)
        }
        else {
            setTimeout( () => setemailValid(false), 500 )
        }
    
    }, [userEmail])

const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
}

return (
    <Page title={props.title} clsname="signup">
        <form id="signup" className="form authform" onSubmit={(e: SubmitEvent<HTMLFormElement>) => submitHandler(e)}>
            <h2>Sign up for a free account</h2>
            <div className="form-group">
                <label className="form-label" htmlFor="uname">Username </label>
                <input
                    id="uname"
                    className="form-input"
                    type="text"
                    name="uname"
                    placeholder="minimum 4 characters no symbols except underscore"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.currentTarget.value)}
                    style={{
                        ...FormStyles,
                        borderColor: (usernameValid === true) ? theme.theme.valid : (usernameValid === undefined) ? theme.theme.border : theme.theme.invalid,
                        outlineColor: (usernameValid) ? theme.theme.valid : theme.theme.invalid
                    }}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="uemail">Email</label>
                <input
                    id="uemail"
                    className="form-input"
                    type="email"
                    name="uemail"
                    placeholder="you@example.com"
                    value={userEmail}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setuserEmail(e.currentTarget.value)}
                    style={{
                        ...FormStyles,
                        borderColor: (emailValid === true) ? theme.theme.valid : (emailValid === undefined) ? theme.theme.border : theme.theme.invalid,
                        outlineColor: (emailValid) ? theme.theme.valid : theme.theme.invalid
                    }}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="upass">Account Password</label>
                <input
                    id="upass"
                    className="form-input"
                    type="password"
                    name="upass"
                    placeholder="minimum 8 characters"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.currentTarget.value)}
                    style={{
                        ...FormStyles,
                        borderColor: (usernameValid === true) ? theme.theme.valid : (usernameValid === undefined) ? theme.theme.border : theme.theme.invalid,
                        outlineColor: (usernameValid) ? theme.theme.valid : theme.theme.invalid
                    }}
                />
            </div>
            <button
                type="submit"
                className="form-button"
                style={{ ...FormStyles }}

            >
                Submit
            </button>
        </form>
    </Page>
)
}