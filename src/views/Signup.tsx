// import type { SubmitEventHandler } from "react"
import type { ViewProps } from "../interfaces/ViewProps"
import { Page } from "../components/Page"
import { useState } from "react"
import { useAppTheme } from "../hooks/useAppTheme"

export function Signup(props: ViewProps) {

    const theme = useAppTheme()

    return (
        <Page title={props.title} clsname="signup">
            <form>
                
            </form>
        </Page>
    )
}