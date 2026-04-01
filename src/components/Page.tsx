interface PageProps {
    title: string
    clsname: string
}
export function Page(props:PageProps) {
    return (
        <main className={"page-content "+props.clsname }>
            <h1>{ props.title }</h1>
        </main>
    )
}