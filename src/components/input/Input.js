import React from 'react'
import { InputField } from './input.style'

function Input(props) {
    return (
        <InputField
            {...props}
            value={props.value}
            name={props.name}
            onChange={props.onchange}
            placeholder={props.placeholder}
        />
    )
}

export default Input