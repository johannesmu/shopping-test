import { useState, type ChangeEvent, type CSSProperties } from 'react'
type FormField = {
    type:string
    name:string
    placeholder:string
    id:string
    label: string
    value: string|undefined
    style: CSSProperties
    changeHandler: (e:string) => void
}
export function FormField(props:FormField) {
    return (
        <div className='form-group'>
            <label>{ props.label }</label>
            <input 
                type={ props.type } 
                name={ props.name } 
                placeholder={ props.placeholder }
                id={ props.id }
                style={{...props.style}}
                value={props.value}
                onChange={ (e:ChangeEvent<HTMLInputElement>) => props.changeHandler(e.target.value)}
            />
        </div>
    )
}