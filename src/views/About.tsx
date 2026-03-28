import type { PageProps } from "../interfaces/PageProps"

export function About( props:PageProps) {
    document.title = props.title
    return <h1>About</h1>
}