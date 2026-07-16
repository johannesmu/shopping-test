// import type { SubmitEventHandler } from "react"
import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { useState, useEffect } from "react"
import { useAppTheme } from "../hooks/useAppTheme"
import { InputField } from "../components/forms/InputField"



export function Signup(props: ViewProps) {
    const[username,setUserName] = useState<undefined|string>()

    const theme = useAppTheme()

    useEffect( () => {}, [username])

    return (
        <Page title={props.title} clsname="signup">
            <form>
                <InputField 
                    type="text"
                    name="uname"
                    placeholder="minimum 4 characters, no spaces"
                    id="uname"
                    label="Username"
                    style={null}
                />
            </form>
        </Page>
    )
}