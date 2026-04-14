interface FormProps {
    id: string
    title: string
    buttonText: string
    submitHandler(): Promise<void>
}
export function Form(props: FormProps) {
    <form id={props.id} onSubmit={props.submitHandler}>
        <h2>{props.title}</h2>
        <label>Email</label>
        <input type="email" name="email" placeholder="you@domain.com" />
        <label>Password</label>
        <input type="password" name="email" placeholder="minimum 8 characters" />
        <button type="submit">{props.buttonText}</button>
    </form>
}