import { useEffect, type ReactNode } from 'react'
interface PageProps {
    title: string
    clsname: string
    doctitle?: string|null
    children: ReactNode
}
export function Page(props:PageProps) {
    useEffect( () => {
        document.title = props.title
    },[ props.title ])
    return (
        <div className={"page-content "+ props.clsname }>
            <h1 className="page-title">{ props.title }</h1>
            {props.children}
        </div>
    )
}