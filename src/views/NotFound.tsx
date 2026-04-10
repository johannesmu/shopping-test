
type NotFoundProps = {
    message: string
}
export function NotFound( props:NotFoundProps ) {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100%"}}>
            <h1 className="not-found message">{ props.message }</h1>
        </div>
    )
}