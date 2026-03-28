import type { PageProps } from "../interfaces/PageProps"

export function Home(props:PageProps) {
    document.title = props.title
    return (
        <h1>Home</h1>
    )
}