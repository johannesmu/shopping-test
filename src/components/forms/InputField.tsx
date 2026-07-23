import { 
    // type ChangeEvent, 
    type CSSProperties } from 'react'
export type FormField = {
    type:string
    name:string
    placeholder:string
    id:string
    label: string
    style: null|CSSProperties
}

export function InputField(props:FormField) {
    //support only for text,email at the moment
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{ props.label }</label>
            <input 
                type={ props.type } 
                name={ props.name } 
                placeholder={ props.placeholder }
                id={ props.id }
                style={{...props.style}}
                // value={props.value}
                // onChange={ (e:ChangeEvent<HTMLInputElement>) => props.changeHandler(e.target.value)}
            />
        </div>
    )
}