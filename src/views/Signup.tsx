// import type { SubmitEventHandler } from "react"
import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { FormField } from "../components/FormField"
import { useState } from "react"
import { useAppTheme } from "../hooks/useAppTheme"

export function Signup(props: ViewProps) {
    const[uname,setUname] = useState<string|undefined>(undefined)

    const theme = useAppTheme()

    const FieldStyle = {
        backgroundColor: theme.colorScheme
    }

    return (
        <Page title={props.title} clsname="signup">
            <form>
                <FormField
                    type="text"
                    name="username"
                    placeholder="At least 4 characters"
                    id="username"
                    label="Choose a username"
                    value={uname}
                    style={}
                    changeHandler={ () => setUname() }
                />
            </form>
        </Page>
    )
}