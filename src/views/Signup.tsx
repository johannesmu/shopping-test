// import type { SubmitEventHandler } from "react"
import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react"
import { useAppTheme } from "../hooks/useAppTheme"

export function Signup(props: ViewProps) {
    // username value
    const [username, setUserName] = useState<undefined | string>(undefined)
    // username valid
    const [usernameValid, setUsernameValid] = useState<undefined | boolean>(undefined)
    // email value
    const [userEmail, setuserEmail] = useState<undefined | string>(undefined)
    // email valid
    const [emailValid, setemailValid] = useState<undefined | boolean>(undefined)
    // password value
    const [userPass, setUserPass] = useState<undefined | string>(undefined)
    // password valid
    const [passValid, setPassValid] = useState<undefined | boolean>(undefined)
    // form valid
    const [validForm,setValidForm] = useState<boolean>(false)

    const TimeOut = 300

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
            setTimeout(() => setUsernameValid(false), TimeOut)
        }
        else {
            setTimeout(() => setUsernameValid(true), TimeOut)
        }
    }, [username])

    // validate email
    useEffect(() => {
        if (!userEmail) { return }
        else if (userEmail.indexOf('@') > 0 && userEmail.length > 5) {
            setTimeout(() => setemailValid(true), TimeOut)
        }
        else {
            setTimeout(() => setemailValid(false), TimeOut)
        }

    }, [userEmail])
    // validate password
    useEffect(() => {
        if (!userPass) { return }
        else if (userPass.length >= 8) {
            setTimeout(() => setPassValid(true), TimeOut)
        }
        else {
            setTimeout(() => setPassValid(false), TimeOut)
        }
    }, [userPass])


    const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Page title={props.title} clsname="signup">
            <form id="signup" className="form authform" onSubmit={(e: SubmitEvent<HTMLFormElement>) => submitHandler(e)}>
                <h2>Sign up for a free account</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="uname">Username { (usernameValid) ? "valid" : "invalid"}</label>
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
                    <label className="form-label" htmlFor="uemail">Email { (emailValid) ? "valid" : "invalid"}</label>
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
                    <label className="form-label" htmlFor="upass">Account Password { (passValid) ? "valid" : "invalid"}</label>
                    <input
                        id="upass"
                        className="form-input"
                        type="password"
                        name="upass"
                        placeholder="minimum 8 characters"
                        value={userPass}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUserPass(e.currentTarget.value)}
                        style={{
                            ...FormStyles,
                            borderColor: (passValid === true) ? theme.theme.valid : (passValid === undefined) ? theme.theme.border : theme.theme.invalid,
                            outlineColor: (passValid === true) ? theme.theme.valid : (passValid === undefined) ? theme.theme.boder : theme.theme.invalid
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="form-button"
                    style={{ ...FormStyles, opacity: (usernameValid && emailValid && passValid ) ? 1 : 0.5 }}
                    disabled={ (usernameValid && emailValid && passValid) ? false : true }
                >
                    {(usernameValid && emailValid && passValid) ? "Sign up" : "Data input expected"}
                </button>
            </form>
        </Page>
    )
}