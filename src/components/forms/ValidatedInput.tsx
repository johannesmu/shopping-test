import { InputField, type FormField } from "./InputField"
import { type ChangeEvent } from "react"

interface ValidatedInputProps extends FormField {
    valid: boolean
    value: undefined | string
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export function ValidatedInput(props: ValidatedInputProps) {
    return (
        <InputField
            type={ props.type } 
            name={ props.name }
            placeholder={ props.placeholder }
            id={ props.id }
            label={ props.label }
            style={ props.style }
        />
    )
}