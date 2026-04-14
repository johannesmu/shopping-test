import { type ReactNode } from "react"

interface PageProps {
    title: string
    clsname: string
    children: ReactNode
}
export function Page(props:PageProps) {
    return (
        <main className={"page-content "+props.clsname }>
            <h1>{ props.title }</h1>
            {props.children}
        </main>
    )
}