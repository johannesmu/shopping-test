import { InputField, type FormField } from "./InputField"

interface ValidatedInputProps extends FormField {
    valid: boolean
    value: undefined | string
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export function ValidatedInput(props: ValidatedInputProps) {
    return (
        <InputField
            type={]props.type }
            name={ props.name }
            placeholder="minimum 4 characters, no spaces"
            id="uname"
            label="Username"
            style={null}
        />
    )
}