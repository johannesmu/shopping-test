import { type ReactNode } from "react"

interface PageProps {
    title: string
    clsname: string
    children: ReactNode
}
export function Page(props:PageProps) {
    document.title = props.title
    return (
        <main className={"page-content "+props.clsname }>
            <h1>{ props.title }</h1>
            {props.children}
        </main>
    )
}