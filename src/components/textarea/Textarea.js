import React from 'react'
import { StyledTextarea } from './textarea.style'

function Textarea(props) {
    return (
        <StyledTextarea onChange={props.onchange} value={props.value} name={props.name} {...props} placeholder={props.placeholder} />
    )
}

export default Textarea